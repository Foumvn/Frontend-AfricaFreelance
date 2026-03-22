'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import PostJobModal from '@/components/dashboard/PostJobModal'

const navigation = [
  { name: 'Dashboard', href: '/', icon: 'dashboard' },
  { name: 'Find Work', href: '/jobs', icon: 'work' },
  { name: 'My Jobs', href: '/my-jobs', icon: 'assignment' },
  { name: 'Wallet', href: '/wallet', icon: 'account_balance_wallet' },
  { name: 'Messages', href: '/messages', icon: 'chat_bubble', badge: 4 },
  { name: 'Settings', href: '/settings', icon: 'settings' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [isPostJobOpen, setIsPostJobOpen] = useState(false)

  return (
    <>
      <aside className="w-72 bg-white dark:bg-background-dark border-r border-slate-200 dark:border-slate-800 flex flex-col fixed h-full z-50">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary rounded-lg p-2 flex items-center justify-center">
            <span className="material-symbols-outlined text-background-dark font-bold">rocket_launch</span>
          </div>
          <div>
            <h1 className="text-slate-900 dark:text-white font-bold text-lg leading-none">Africa-Freelance</h1>
            <p className="text-slate-500 text-xs mt-1">Client Portal</p>
          </div>
        </div>

        <div className="px-4">
          <button 
            onClick={() => setIsPostJobOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-primary text-background-dark font-bold py-3 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined">add</span>
            Post a Job
          </button>
        </div>

        <nav className="flex-1 px-4 mt-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all ${
                  isActive
                    ? 'active-nav'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span>{item.name}</span>
                {item.badge && (
                  <span className="ml-auto bg-primary/20 text-slate-900 text-xs px-2 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 mt-auto border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2">
            <div className="size-10 rounded-full bg-slate-200 overflow-hidden">
              <img
                alt="User profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKuc1s07tWicQR-65rxt4oGQ3WeqjNnW2FdO_8eEi8va59mypLDY4v9oHvgmRFOrNjPMjL1kSaj60wHN-ALchuLOacU8T7Q2PCuVorHp4AWkapd0D0Jwdth1p4ysf7aOvIf5bEtPHfRrCdmxxilhXgpx_GIgRuyUgetXQ-Qo2bAIrV6yp_U3z24UEJzx4UNBDPwvt1E4BeAVdSQdca8lmhpJmQKJjPjoJfvyntBf-YdrtyMdMv0hCmoTx7KfxkVKkIdJaMXYmmbFdM"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 dark:text-white">John Kamau</span>
              <span className="text-xs text-slate-500">Premium Client</span>
            </div>
            <Link href="/settings" className="ml-auto text-slate-400 hover:text-slate-600">
              <span className="material-symbols-outlined">settings</span>
            </Link>
          </div>
        </div>
      </aside>
      
      <PostJobModal isOpen={isPostJobOpen} onClose={() => setIsPostJobOpen(false)} />
    </>
  )
}
