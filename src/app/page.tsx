'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.push('/login')
  }, [router])

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
          <span className="material-symbols-outlined text-background-dark text-3xl font-bold">rocket_launch</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Africa-Freelance</h1>
        <p className="text-slate-500 mt-2">Loading...</p>
      </div>
    </div>
  )
}
