'use client'

import AppLayout from '@/components/layout/AppLayout'

export default function FundsReleasedPage() {
  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-background-dark rounded-xl p-8 text-center shadow-sm border border-primary/10 mb-6">
          <div className="mx-auto w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Funds Released</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Mission Accomplished! Funds released to your wallet.</p>
        </div>

        <div className="bg-white dark:bg-background-dark rounded-xl overflow-hidden shadow-sm border border-primary/10">
          <div className="p-6 bg-primary/5 border-b border-primary/10">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Amount Transferred</p>
            <p className="text-4xl font-black text-slate-900 dark:text-white">$1,250.00</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Transaction ID</span>
              <span className="font-mono font-medium text-slate-900 dark:text-slate-100">TRX-98231044</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Transfer Date</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">Oct 24 2023, 14:35</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Destination Method</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">Freelance Wallet</span>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-primary">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span className="text-sm font-semibold">Secure Transfer by Escrow-Africa</span>
            </div>
          </div>
        </div>

        <div className="bg-primary rounded-xl p-8 shadow-lg shadow-primary/20 text-slate-900 mt-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined font-bold">star</span>
            <h3 className="text-xl font-bold">Next Step</h3>
          </div>
          <p className="mb-6 font-medium text-slate-800">How was your collaboration? Leave a review to help the community.</p>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <button key={i} className="hover:scale-110 transition-transform">
                  <span className={`material-symbols-outlined text-4xl ${i <= 4 ? 'fill-current text-white' : 'text-white'}`}>star</span>
                </button>
              ))}
            </div>
            <textarea className="w-full rounded-lg border-none bg-white/50 focus:bg-white focus:ring-2 focus:ring-slate-900 placeholder:text-slate-600 transition-all p-4" placeholder="Share your experience..." rows={3}></textarea>
            <button className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors">
              Publish Review
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button className="px-8 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined">download</span>
            PDF Receipt
          </button>
          <a href="/" className="px-8 py-3 bg-primary/10 text-slate-900 dark:text-slate-100 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined">dashboard</span>
            Back to Dashboard
          </a>
        </div>
      </div>
    </AppLayout>
  )
}
