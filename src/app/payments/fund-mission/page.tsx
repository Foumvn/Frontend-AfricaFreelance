'use client'

import AppLayout from '@/components/layout/AppLayout'

export default function FundMissionPage() {
  return (
    <AppLayout>
      <div className="flex flex-col gap-2 mb-6">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Fund Mission</h2>
        <p className="text-slate-500">Choose your preferred payment method to secure the project funds in escrow.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">smartphone</span>
              Mobile Money
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="relative border-2 border-slate-200 dark:border-slate-800 rounded-xl p-4 cursor-pointer hover:border-primary transition-colors group has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <input defaultChecked className="absolute opacity-0" name="payment_method" type="radio" />
                <div className="flex flex-col items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-[#FF7900] flex items-center justify-center text-white font-bold text-xl">OM</div>
                  <span className="font-bold text-sm">Orange Money</span>
                </div>
              </label>

              <label className="relative border-2 border-slate-200 dark:border-slate-800 rounded-xl p-4 cursor-pointer hover:border-primary transition-colors group has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <input className="absolute opacity-0" name="payment_method" type="radio" />
                <div className="flex flex-col items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-[#31A8FF] flex items-center justify-center text-white font-bold text-xl">W</div>
                  <span className="font-bold text-sm">Wave</span>
                </div>
              </label>

              <label className="relative border-2 border-slate-200 dark:border-slate-800 rounded-xl p-4 cursor-pointer hover:border-primary transition-colors group has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                <input className="absolute opacity-0" name="payment_method" type="radio" />
                <div className="flex flex-col items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-[#FFCC00] flex items-center justify-center text-slate-900 font-bold text-xl">MTN</div>
                  <span className="font-bold text-sm">MTN MoMo</span>
                </div>
              </label>
            </div>
          </div>

          <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">credit_card</span>
              Bank Card
            </h3>
            <label className="relative border-2 border-slate-200 dark:border-slate-800 rounded-xl p-4 cursor-pointer hover:border-primary transition-colors group has-[:checked]:border-primary has-[:checked]:bg-primary/5 flex items-center gap-4">
              <input className="absolute opacity-0" name="payment_method" type="radio" />
              <div className="h-10 w-16 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-slate-400">credit_card</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold">Visa / Mastercard</span>
                <span className="text-xs text-slate-500">Pay securely with your credit or debit card</span>
              </div>
            </label>
          </div>

          <button className="w-full bg-primary hover:brightness-95 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">lock</span>
            Proceed to Pay $525.00
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-4">Mission Summary</h3>
            <div className="flex flex-col gap-4 mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-4xl">design_services</span>
              </div>
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">Ref: #AF-8829</p>
                <h4 className="text-base font-bold leading-tight">UI/UX Design for Fintech App</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Client: Global Ventures Ltd</p>
              </div>
            </div>
            <div className="space-y-3 border-t border-slate-100 dark:border-slate-800 pt-4">
              <div className="flex justify-between items-center">
                <p className="text-slate-500 dark:text-slate-400 text-sm">Mission Budget</p>
                <p className="font-medium">$500.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-slate-500 dark:text-slate-400 text-sm">Service Fee (5%)</p>
                <p className="font-medium">$25.00</p>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-800">
                <p className="text-slate-900 dark:text-white font-bold">Total Amount</p>
                <p className="text-xl font-bold text-primary">$525.00</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg">
            <span className="material-symbols-outlined text-primary text-sm">info</span>
            <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
              Funds are held securely by Africa-Freelance and only released to the freelancer once you approve the delivered work.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
