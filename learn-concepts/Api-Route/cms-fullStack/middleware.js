import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log(request.url);

  //   console.log("middleware runned", request.nextUrl.pathname);

  if (request.nextUrl.pathname.startsWith("/users")) {
    console.log("Cookies =>", request.cookies.getAll());

    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
