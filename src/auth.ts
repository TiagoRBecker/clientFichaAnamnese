import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
async function refreshAccessToken(token: any) {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/auth/refreshToken/user`,
      { refreshToken: token.refreshToken }
    );

    const newTokens = response.data;

    return {
      ...token,
      accessToken: newTokens.accessToken,
      refreshToken: newTokens.refresh,
      accessTokenExpires: newTokens.exp,
    };
  } catch (error) {
    return {
      token,
      error: "RefreshAccessTokenError",
    };
  }
}
export const authOptions = {
  session: {
    strategy: "jwt",
  },

  pages: {
    signOut: "/",
    signIn: "/auth/signin",
    error: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req): Promise<any> {
        const dto = {
          email: credentials?.email,
          password: credentials?.password,
        };

        try {
          const request = await axios.post(
            `${process.env.API_URL}/auth/user/signin`,
            dto
          );

          return {
            ...request.data,
          };
        } catch (error: any) {
          throw new Error(`${error.response.data.message}`);
        }
      },
    }),
  ],
  callbacks: {
    
    async signIn({ user, account, profile, email, credentials }: any) {
      // Exemplo: só permitir logins via Google
      if (account?.provider === "google") {
        try {
          const request = await axios.post(
            `${process.env.API_URL}/auth/user/signin/google`,
            { token: account.id_token }
          );

          user.id = request.data.id;
          user.name = request.data.name;
          user.accessToken = request.data.accessToken;
          user.refreshToken = request.data.refreshToken;
          user.exp = request.data.exp;

          return true;
        } catch (error: any) {
          throw new Error(`${error.response.data.message}`);
        }
      }

      return true;
    },
    async jwt({ token, user, account }: any) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.accessTokenExpires = user.exp;
      }
      if (Date.now() < token.accessTokenExpires * 1000) {
        return token;
      }

      return await refreshAccessToken(token);
    },
    async session({ session, token }: any) {
      session.user = {
        id: token.id,
        name: token.name,
        accessToken: token.accessToken,
        error: token.error,
      };
      return session;
    },
  },
};
