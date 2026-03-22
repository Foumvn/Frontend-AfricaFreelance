'use client'

interface ProfileSummaryProps {
  showProfileStrength?: boolean
}

export default function FreelancerSidebar({ showProfileStrength = false }: ProfileSummaryProps) {
  return (
    <aside className="w-full lg:w-64 flex flex-col gap-6 shrink-0">
      <div className="bg-white dark:bg-neutral-dark p-5 rounded-xl border border-neutral-light dark:border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-background-light dark:bg-slate-800 flex items-center justify-center text-primary border border-primary/20">
            <span className="material-symbols-outlined">verified_user</span>
          </div>
          <div>
            <h3 className="font-bold text-sm">Kofi Mensah</h3>
            <p className="text-xs text-slate-500">Professional UI Designer</p>
          </div>
        </div>

        {showProfileStrength && (
          <div className="mb-4 p-3 bg-background-light dark:bg-slate-800 rounded-lg border border-primary/10">
            <p className="text-[10px] font-bold text-primary uppercase mb-1">Profile Strength</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-neutral-light dark:bg-slate-700 rounded-full overflow-hidden">
                <div className="bg-primary h-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-[10px] font-bold">75%</span>
            </div>
            <p className="text-[10px] text-slate-500 mt-2">Add 2 more <b>Work Samples</b> to reach 100%</p>
          </div>
        )}

        <nav className="flex flex-col gap-1">
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary font-semibold text-sm" href="/">
            <span className="material-symbols-outlined text-xl">dashboard</span> Dashboard
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-background-light dark:hover:bg-slate-800 text-sm transition-colors" href="/wallet">
            <span className="material-symbols-outlined text-xl">account_balance_wallet</span> Wallet
            <span className="ml-auto text-xs font-bold px-2 py-0.5 bg-neutral-light dark:bg-slate-700 rounded-full">$1,240</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-background-light dark:hover:bg-slate-800 text-sm transition-colors" href="/my-jobs">
            <span className="material-symbols-outlined text-xl">description</span> Applied Jobs
            <span className="ml-auto text-xs font-bold px-2 py-0.5 bg-neutral-light dark:bg-slate-700 rounded-full">4</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-background-light dark:hover:bg-slate-800 text-sm transition-colors" href="/settings">
            <span className="material-symbols-outlined text-xl">settings</span> Settings
          </a>
        </nav>
        <button className="w-full mt-6 bg-primary text-neutral-dark font-bold py-3 rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-lg">add_circle</span> Post a Service
        </button>
      </div>

      <div className="bg-neutral-dark text-white p-5 rounded-xl relative overflow-hidden">
        <div className="relative z-10">
          <span className="material-symbols-outlined text-primary text-3xl mb-2">security</span>
          <h4 className="font-bold mb-2">Escrow Protected</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Your payments are secured in escrow and released only when you're satisfied with the work. High-trust freelancing across Africa.
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-10">
          <span className="material-symbols-outlined text-9xl">shield</span>
        </div>
      </div>
    </aside>
  )
}
