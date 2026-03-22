'use client'

import AppLayout from '@/components/layout/AppLayout'

const transactions = [
  {
    id: 1,
    date: 'Oct 24, 2023',
    mission: 'Mobile App Design - UI Kit',
    client: 'TechSavanna Ltd',
    type: 'Credit',
    amount: '+$850.00',
    status: 'Completed',
    statusColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  },
  {
    id: 2,
    date: 'Oct 22, 2023',
    mission: 'Withdrawal to Wave',
    client: 'Account: +221 77 *** 44',
    type: 'Debit',
    amount: '- 500,000 CFA',
    status: 'Withdrawn',
    statusColor: 'text-slate-500',
  },
  {
    id: 3,
    date: 'Oct 20, 2023',
    mission: 'API Integration Project',
    client: 'Milestone 1: Backend Setup',
    type: 'Escrow',
    amount: '+$1,200.00',
    status: 'Pending',
    statusColor: 'text-amber-500',
  },
  {
    id: 4,
    date: 'Oct 18, 2023',
    mission: 'Logo Branding Package',
    client: 'EcoFarm Ghana',
    type: 'Credit',
    amount: '+$400.00',
    status: 'Completed',
    statusColor: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  },
]

export default function WalletPage() {
  return (
    <AppLayout>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Wallet</h2>
          <p className="text-slate-500 mt-1">Manage your earnings, escrow funds, and payouts across Africa.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-slate-900 px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-sm">
          <span className="material-symbols-outlined">account_balance_wallet</span>
          Withdraw Funds
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-6xl">payments</span>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Total Earnings</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white">$4,250.00</p>
          <p className="text-xs text-primary font-medium mt-2">+12% from last month</p>
        </div>

        <div className="bg-primary/10 dark:bg-primary/5 p-6 rounded-xl border border-primary/30 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <span className="material-symbols-outlined text-6xl text-primary">savings</span>
          </div>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-1">Available for Withdrawal</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white">2,150,000 CFA</p>
          <div className="flex gap-2 mt-4">
            <button className="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700">Wave</button>
            <button className="px-3 py-1 bg-white dark:bg-slate-800 rounded text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700">Orange</button>
          </div>
        </div>

        <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-6xl">lock</span>
          </div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Escrow Balance</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white">$1,200.00</p>
          <p className="text-xs text-slate-400 mt-2">Held for 3 active missions</p>
        </div>
      </div>

      <div className="bg-white dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="font-bold text-lg">Transaction History</h3>
          <div className="flex gap-2">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input className="pl-9 pr-4 py-2 text-sm border border-slate-200 dark:border-slate-700 bg-transparent rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Search transactions..." type="text" />
            </div>
            <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs uppercase font-bold">
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Mission/Activity</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-slate-500">{tx.date}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900 dark:text-white">{tx.mission}</div>
                    <div className="text-xs text-slate-400">{tx.client}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-black uppercase ${
                      tx.type === 'Credit' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                      tx.type === 'Debit' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' :
                      'bg-primary/20 text-slate-700 dark:text-slate-300'
                    }`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{tx.amount}</td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 ${tx.statusColor}`}>
                      <div className={`size-2 rounded-full ${
                        tx.status === 'Completed' ? 'bg-primary' :
                        tx.status === 'Pending' ? 'bg-amber-500' :
                        'bg-slate-300'
                      }`}></div>
                      <span className="font-medium">{tx.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 bg-slate-50 dark:bg-slate-800/30 flex justify-center">
          <button className="text-sm font-bold text-primary hover:underline">View All Transactions</button>
        </div>
      </div>
    </AppLayout>
  )
}
