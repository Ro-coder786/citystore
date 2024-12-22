'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className='ml-3 p-1 rounded-full text-gray-400 hover:text-inherit focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
            {theme == "dark" ?
                <IoSunnyOutline className="size-6" />
                :
                <IoMoonOutline className="size-6" />
            }
        </button>
    );
};

