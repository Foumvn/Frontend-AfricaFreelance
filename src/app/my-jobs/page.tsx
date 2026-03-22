'use client'

import DashboardLayout from '@/components/layout/DashboardLayout'

const myJobs = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    client: 'Global Ventures Ltd',
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    budget: '$2,500',
    deadline: 'Dec 15, 2024',
    progress: 65,
  },
  {
    id: 2,
    title: 'Mobile App Backend - Python',
    client: 'TechStart Africa',
    status: 'Open',
    statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    budget: '$1,200',
    deadline: 'Jan 30, 2025',
    progress: 0,
  },
  {
    id: 3,
    title: 'Brand Identity for Fintech Start-up',
    client: 'FinanceFlow Ltd',
    status: 'Completed',
    statusColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300',
    budget: '$850',
    deadline: 'Oct 20, 2024',
    progress: 100,
  },
]

export default function MyJobsPage() {
  return (
    <DashboardLayout>
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            My Jobs
          </h2>
          <p className="text-slate-500 mt-1">Manage your active projects and track progress.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-primary text-background-dark px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all">
            <span className="material-symbols-outlined text-lg">add</span>
            Post New Job
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex gap-2">
          <button className="px-4 py-2 bg-primary text-slate-900 rounded-lg text-sm font-bold">All Jobs</button>
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700">In Progress</button>
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700">Completed</button>
          <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700">Open</button>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <th className="px-6 py-4">Job Title</th>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Budget</th>
              <th className="px-6 py-4">Deadline</th>
              <th className="px-6 py-4">Progress</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {myJobs.map((job) => (
              <tr key={job.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-all">
                <td className="px-6 py-4">
                  <span className="font-bold text-slate-900 dark:text-white">{job.title}</span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{job.client}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${job.statusColor}`}>
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold">{job.budget}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{job.deadline}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${job.progress === 100 ? 'bg-emerald-500' : 'bg-primary'}`} style={{ width: `${job.progress}%` }}></div>
                    </div>
                    <span className="text-xs font-medium text-slate-500">{job.progress}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-primary transition-all">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}
