import { Login } from '@/components/login/form'

export default function Page() {
    return (
        <div className="flex w-full h-screen items-center justify-center md:pl-60 md:justify-start">
            <div className="flex flex-col prose-sm md:prose">
                <h1>당신의 지출을 줄여보세요</h1>
                <h4 className="text-end">by reducePay</h4>
                <Login />
            </div>
        </div>
    )
}
