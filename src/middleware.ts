/* eslint-disable padding-line-between-statements */
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getCurrentUser } from "./services/AuthService";

const authRoutes = ["/login", "/register"];

type Role = keyof typeof roleBaseRoutes;

const roleBaseRoutes = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrentUser();
  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }
  }
  if (user?.role && roleBaseRoutes[user?.role as Role]) {
    const routes = roleBaseRoutes[user?.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile", "/profile/:page*", "/admin", "/login", "/register"],
};




