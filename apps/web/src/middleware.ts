import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

interface User {
  id: number;
  email: string;
  role: "EVENT_ORGANIZER" | "BUYER";
}

const loggedOutRoutes = [
  "/login",
  "/register",
  "/reset-password",
  "/forgot-password",
];

const eventOrganizerRoutes = ["/dashboard"];
const buyerRoutes = ["/homepage"];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const user = req.auth?.user as User | undefined;

  const isLoggedOutRoute = loggedOutRoutes.some((route) =>
    pathname.startsWith(route),
  );

  // Redirect unauthenticated users to login if they are accessing private routes
  // if (!user && !isLoggedOutRoute && pathname !== "/") {
  //   return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
  // }

  // // Redirect authenticated users away from loggedOutRoutes
  // if (user && isLoggedOutRoute) {
  //   return NextResponse.redirect(new URL(user.role === "EVENT_ORGANIZER" ? "/dashboard" : "/homepage", req.nextUrl.origin));
  // }

  // // Handle event organizer routes
  // if (eventOrganizerRoutes.includes(pathname)) {
  //   if (user?.role !== "EVENT_ORGANIZER") {
  //     return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  //   }
  // }

  // // Handle buyer routes
  // if (buyerRoutes.includes(pathname)) {
  //   if (user?.role !== "BUYER") {
  //     return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  //   }
  // }

  // For other routes, allow access
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
