'use client'

import { useSession } from 'next-auth/react'

export default function Page() {
    const { data: session, status } = useSession()
    return (
        <div>
            {status === 'loading' ? (
                <div>Loading...</div>
            ) : (
                <>
                    <span>status is {status}</span>
                    <br />
                    <span>token is {session ? JSON.stringify(session) : 'not found'}</span>
                </>
            )}
        </div>
    )
}
