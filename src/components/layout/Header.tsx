'use client'

import { useState } from 'react'
import PostJobModal from '@/components/dashboard/PostJobModal'

export default function Header() {
  const [isPostJobOpen, setIsPostJobOpen] = useState(false)

  return (
    <>
      <header className="h-16 bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 sticky top-0 z-40">
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-1.5 w-96">
          <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500"
            placeholder="Search for freelancers or projects..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
          </button>
          <button 
            onClick={() => setIsPostJobOpen(true)}
            className="flex items-center gap-2 bg-primary text-background-dark px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Post a Job
          </button>
        </div>
      </header>
      
      <PostJobModal isOpen={isPostJobOpen} onClose={() => setIsPostJobOpen(false)} />
    </>
  )
}
