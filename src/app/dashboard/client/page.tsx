'use client'

import { AuthGuard } from '@/components/auth/AuthGuard'
import { jobService } from '@/services/jobs'
import { useState, useEffect } from 'react'
import type { Job } from '@/types/api'

export default function ClientDashboardPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsData = await jobService.getAllJobs()
        setJobs(jobsData)
      } catch (error) {
        console.error('Failed to fetch jobs:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchJobs()
  }, [])

  return (
    <AuthGuard requiredUserType="Client">
      <div className="min-h-screen bg-background-light dark:bg-background-dark">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-white dark:bg-background-dark border-r border-slate-200 dark:border-slate-800 min-h-screen p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary rounded-lg p-2 flex items-center justify-center">
                <span className="material-symbols-outlined text-background-dark font-bold">rocket_launch</span>
              </div>
              <div>
                <h1 className="text-slate-900 dark:text-white font-bold text-lg">Africa-Freelance</h1>
                <p className="text-slate-500 text-xs">Client Dashboard</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { icon: 'dashboard', label: 'Dashboard', active: true },
                { icon: 'work', label: 'My Jobs', active: false },
                { icon: 'people', label: 'Freelancers', active: false },
                { icon: 'payments', label: 'Payments', active: false },
                { icon: 'forum', label: 'Messages', active: false },
                { icon: 'settings', label: 'Settings', active: false },
              ].map((item, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    item.active
                      ? 'bg-primary text-background-dark'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <span className="material-symbols-outlined">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Client Dashboard</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Manage your projects and find talented freelancers</p>
              </div>
              <button className="bg-primary text-background-dark px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">add</span>
                Post New Job
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Active Jobs', value: '12', icon: 'work', color: 'text-blue-600' },
                { label: 'Total Spent', value: '$2,450', icon: 'payments', color: 'text-emerald-600' },
                { label: 'Freelancers', value: '8', icon: 'people', color: 'text-purple-600' },
                { label: 'Completed', value: '15', icon: 'check_circle', color: 'text-green-600' },
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`material-symbols-outlined text-2xl ${stat.color}`}>{stat.icon}</span>
                    <span className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Recent Jobs */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Jobs</h3>
              </div>
              <div className="p-6">
                {isLoading ? (
                  <div className="text-center py-8">
                    <span className="material-symbols-outlined text-3xl text-primary animate-spin">refresh</span>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">Loading jobs...</p>
                  </div>
                ) : jobs.length > 0 ? (
                  <div className="space-y-4">
                    {jobs.slice(0, 5).map((job) => (
                      <div key={job.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white">{job.title}</h4>
                          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{job.description}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <span className="text-sm font-semibold text-primary">${job.budget}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              job.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {job.status}
                            </span>
                          </div>
                        </div>
                        <button className="text-primary hover:underline font-medium text-sm">
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <span className="material-symbols-outlined text-3xl text-slate-400">work_off</span>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">No jobs posted yet</p>
                    <button className="mt-4 bg-primary text-background-dark px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all">
                      Post Your First Job
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
