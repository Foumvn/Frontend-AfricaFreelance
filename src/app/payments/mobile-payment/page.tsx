'use client'

import AppLayout from '@/components/layout/AppLayout'

export default function MobilePaymentPage() {
  return (
    <AppLayout>
      <div className="max-w-lg mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary text-4xl">shield_person</span>
          </div>
          <h2 className="text-2xl font-bold text-center">Confirm Payment</h2>
          <p className="text-slate-500 dark:text-slate-400 text-center mt-2">
            Pay securely via Mobile Money to start your project.
          </p>
        </div>

        <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-3">Choose Provider</label>
            <div className="flex h-12 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm transition-all">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
                    <span className="text-[10px] text-white font-bold">O</span>
                  </div>
                  <span className="text-sm font-medium">Orange Money</span>
                </div>
                <input defaultChecked className="hidden" name="provider" type="radio" value="Orange Money" />
              </label>
              <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm transition-all">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-400 flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-xs">water_drop</span>
                  </div>
                  <span className="text-sm font-medium">Wave</span>
                </div>
                <input className="hidden" name="provider" type="radio" value="Wave" />
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Phone Number</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
                <span className="material-symbols-outlined text-lg">phone_iphone</span>
              </div>
              <input
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                placeholder="e.g. +221 77 000 00 00"
                type="tel"
              />
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-xl">lock</span>
              <div>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">Escrow Protected</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-1">
                  Your funds will be held securely and only released when you approve the work.
                </p>
              </div>
            </div>
          </div>

          <button className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <span>Send PIN Request</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span>PCI-DSS Compliant Encryption</span>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
