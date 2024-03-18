// import Image from 'next/image'
import AuthProvider from '@/app/providers/authProvider'

export default function Home() {
    return (
        <AuthProvider>
            <main></main>
        </AuthProvider>
    )
}
