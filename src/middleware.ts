import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/app(.*)"])

export default clerkMiddleware(
    (auth, request) => {
        if (isProtectedRoute(request))
            auth().protect();
    }
)

export const config = {
    matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};