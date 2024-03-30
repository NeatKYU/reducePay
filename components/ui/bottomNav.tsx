'use client'

import { HomeIcon, TrophyIcon, SettingsIcon, CircleUserRoundIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

const paths = ['/home', '/rank', '/profile', '/settings']

export const BottomNav = () => {
    const pathname = usePathname()
    const activeIndex = paths.indexOf(pathname)
    const router = useRouter()
    const handleMovePage = (path: string) => {
        router.push(path)
    }
    return (
        <div className="nav-wrapper w-full flex fixed left-0 bottom-0 justify-center border-t shadow-xl">
            <div
                className={cn(
                    'w-20 h-16 flex justify-center items-center hover:bg-slate-100 cursor-pointer',
                    { 'bg-slate-100': activeIndex === 0 }
                )}
                onClick={() => handleMovePage(paths[0])}
            >
                <HomeIcon />
            </div>
            <div
                className={cn(
                    'w-20 h-16 flex justify-center items-center hover:bg-slate-100 cursor-pointer',
                    { 'bg-slate-100': activeIndex === 1 }
                )}
                onClick={() => handleMovePage(paths[1])}
            >
                <TrophyIcon />
            </div>
            <div
                className={cn(
                    'w-20 h-16 flex justify-center items-center hover:bg-slate-100 cursor-pointer',
                    { 'bg-slate-100': activeIndex === 2 }
                )}
                onClick={() => handleMovePage(paths[2])}
            >
                <CircleUserRoundIcon />
            </div>
            <div
                className={cn(
                    'w-20 h-16 flex justify-center items-center hover:bg-slate-100 cursor-pointer',
                    { 'bg-slate-100': activeIndex === 3 }
                )}
                onClick={() => handleMovePage(paths[3])}
            >
                <SettingsIcon />
            </div>
        </div>
    )
}
