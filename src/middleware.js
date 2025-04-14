import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Get the token from the cookies
  const token = request.cookies.get("authToken"); // Access the cookie named 'authToken'

  // List of protected routes that require login
  const protectedRoutes = ["/profile", "/createDecision"];

  // If token is not present and trying to access protected routes, redirect to signup
  if (!token && protectedRoutes.includes(pathname)) {
    const url = new URL("/signup", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Specify which routes this middleware should run for
export const config = {
  matcher: ["/profile", "/createDecision"], // Only protect these pages
};
