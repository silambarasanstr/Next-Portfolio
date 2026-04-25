import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  console.log("Middleware running 🔥", req.nextUrl.pathname);
  const token = req.cookies.get("token");

  if (!token) {
    console.log("No token ❌");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  console.log("Token exists ✅");
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
