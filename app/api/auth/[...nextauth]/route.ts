import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { SupabaseAdapter } from '@next-auth/supabase-adapter'
import jwt from 'jsonwebtoken'

const handler = NextAuth({
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    // use @next-auth/supabase-adapter instead of @auth/supabase-adapter
    adapter: SupabaseAdapter({
        url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? '',
    }),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        // ...add more providers here
    ],
    // callbacks: {
    //     async session({ session, user }) {
    //         const signingSecret = process.env.SUPABASE_JWT_SECRET
    //         if (signingSecret) {
    //             const payload = {
    //                 aud: 'authenticated',
    //                 exp: Math.floor(new Date(session.expires).getTime() / 1000),
    //                 sub: user.id,
    //                 email: user.email,
    //                 role: 'authenticated',
    //             }
    //             session.supabaseAccessToken = jwt.sign(payload, signingSecret)
    //         }
    //         return session
    //     },
    // },

    // 내가 만든 로그인 페이지 사용
    pages: {
        signIn: '/login',
    },
})

export { handler as GET, handler as POST }
