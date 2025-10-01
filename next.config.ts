/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... outras configurações

  images: {
      remotePatterns: [
    
    {
        protocol: 'https',
        hostname: 'anamnese-news.s3.sa-east-1.amazonaws.com',
        port: '',
        pathname: '/public/**',
        search: '',
      },
    ],
    
  },
};

module.exports = nextConfig;