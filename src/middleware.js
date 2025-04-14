import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("authToken");

  const protectedRoutes = ["/profile", "/createDecision"];

  if (!token && protectedRoutes.includes(pathname)) {
    const url = new URL("/signup", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/createDecision", "/login", "/signup"],
};
