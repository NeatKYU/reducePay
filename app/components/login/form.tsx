'use client'

import { signIn } from 'next-auth/react'

export const Login = () => {
    const handleLogin = (provider: string, callbackurl: string) => {
        signIn(provider, { callbackUrl: callbackurl })
    }
    return (
        <div className="flex flex-col">
            <button onClick={() => handleLogin('google', '/home')}>구글 로그인</button>
        </div>
    )
}
