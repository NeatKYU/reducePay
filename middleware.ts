import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth(function middleware(req) {
    if (!req.nextauth.token) {
        return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next()
})

export const config = {
    // matcher 설정하는 방법
    // https://nextjs.org/docs/app/building-your-application/routing/middleware
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login).*)'],
}
