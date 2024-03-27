'use client'

import { signIn, signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
export const Login = () => {
    const { status } = useSession()
    const router = useRouter()

    const handleLogin = (provider: string, callbackurl: string) => {
        signIn(provider, { callbackUrl: callbackurl })
    }
    const handleSignOut = () => {
        signOut().then(() => router.push('/'))
    }

    return (
        <div className="flex flex-col">
            {status === 'unauthenticated' ? (
                <Button onClick={() => handleLogin('google', '/home')}>구글 로그인</Button>
            ) : (
                <Button onClick={() => signOut()}>로그아웃</Button>
            )}
        </div>
    )
}
