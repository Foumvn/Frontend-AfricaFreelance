'use client'

import AppLayout from '@/components/layout/AppLayout'
import { MaterialSymbol } from 'react-material-symbols'

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="text-slate-500 dark:text-slate-400">Welcome back! Here&apos;s what&apos;s happening.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-500 dark:text-slate-400 text-sm">Available Balance</span>
              <MaterialSymbol icon="account_balance_wallet" size={24} className="text-primary" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">$2,450.00</p>
            <p className="text-sm text-green-500 mt-1">+$350.00 this week</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-500 dark:text-slate-400 text-sm">Active Jobs</span>
              <MaterialSymbol icon="work" size={24} className="text-primary" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">5</p>
            <p className="text-sm text-slate-500 mt-1">2 in progress, 3 pending</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-500 dark:text-slate-400 text-sm">Escrow</span>
              <MaterialSymbol icon="lock" size={24} className="text-primary" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">$1,200.00</p>
            <p className="text-sm text-slate-500 mt-1">3 jobs in escrow</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-500 dark:text-slate-400 text-sm">Completed</span>
              <MaterialSymbol icon="check_circle" size={24} className="text-primary" />
            </div>
            <p className="text-3xl font-bold text-slate-900 dark:text-white">24</p>
            <p className="text-sm text-green-500 mt-1">All time jobs completed</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Jobs</h2>
            </div>
            <div className="p-6 space-y-4">
              {[
                { title: 'Website Redesign', client: 'Tech Corp', status: 'In Progress', amount: '$800' },
                { title: 'Mobile App UI', client: 'Startup Inc', status: 'Review', amount: '$1,200' },
                { title: 'Logo Design', client: 'Design Studio', status: 'Completed', amount: '$350' },
              ].map((job, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{job.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{job.client}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      job.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      job.status === 'In Progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {job.status}
                    </span>
                    <p className="text-sm font-medium text-slate-900 dark:text-white mt-1">{job.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="p-6 border-b border-slate-200 dark:border-slate-700">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Recommended Freelancers</h2>
            </div>
            <div className="p-6 space-y-4">
              {[
                { name: 'Amara Diallo', role: 'Full Stack Developer', rating: 4.9 },
                { name: 'Kofi Mensah', role: 'UI/UX Designer', rating: 4.8 },
                { name: 'Fatima Okafor', role: 'Mobile Developer', rating: 4.7 },
              ].map((freelancer, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">{freelancer.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 dark:text-white">{freelancer.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{freelancer.role}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <MaterialSymbol icon="star" size={16} className="text-yellow-500" />
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{freelancer.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
