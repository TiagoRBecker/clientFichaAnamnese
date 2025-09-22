export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/library/:path*", // pega /library, /library/123, /library/books/1
    "/cart",           // pega só /cart
    "/orders/:path*",  // pega /orders, /orders/123, /orders/123/items
    "/success",        // pega só /success
  ],
};