import { BottomNav } from '@/components/ui/bottomNav'

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="flex w-full">
            {children}
            <BottomNav />
        </div>
    )
}
