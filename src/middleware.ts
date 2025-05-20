/* eslint-disable padding-line-between-statements */
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const authRoutes = ["/login", "/register"];

type Role = keyof typeof roleBaseRoutes;

const roleBaseRoutes = {
    USER : [/^\/profile/],
    ADMIN : [/^\/admin/]
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = {
      name : "rezwan",
      token : "sgfsg sgssg s",
      role : "ADMIN"
  }
//   const user = undefined;

  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if(user?.role && roleBaseRoutes[user?.role as Role]){
    const routes = roleBaseRoutes[user?.role as Role]
    if(routes.some((route)=>pathname.match(route))){
        return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile", "/admin", "/login", "/register"],
};
