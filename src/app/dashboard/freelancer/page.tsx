'use client'

import { AuthGuard } from '@/components/auth/AuthGuard'
import { jobService } from '@/services/jobs'
import { useState, useEffect } from 'react'
import type { Job } from '@/types/api'

export default function FreelancerDashboardPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filters, setFilters] = useState({
    category: '',
    budget: '',
    country: ''
  })

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
    <AuthGuard requiredUserType="Freelancer">
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
                <p className="text-slate-500 text-xs">Freelancer Dashboard</p>
              </div>
            </div>

            <nav className="space-y-2">
              {[
                { icon: 'dashboard', label: 'Dashboard', active: true },
                { icon: 'search', label: 'Find Jobs', active: false },
                { icon: 'work', label: 'My Proposals', active: false },
                { icon: 'payments', label: 'Earnings', active: false },
                { icon: 'forum', label: 'Messages', active: false },
                { icon: 'person', label: 'Profile', active: false },
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
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Find Jobs</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">Discover exciting projects from clients across Africa</p>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Category</label>
                  <select 
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                  >
                    <option value="">All Categories</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile Development</option>
                    <option value="design">Design</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Budget Range</label>
                  <select 
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={filters.budget}
                    onChange={(e) => setFilters({...filters, budget: e.target.value})}
                  >
                    <option value="">Any Budget</option>
                    <option value="0-100">$0 - $100</option>
                    <option value="100-500">$100 - $500</option>
                    <option value="500-1000">$500 - $1000</option>
                    <option value="1000+">$1000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Country</label>
                  <select 
                    className="w-full px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    value={filters.country}
                    onChange={(e) => setFilters({...filters, country: e.target.value})}
                  >
                    <option value="">All Countries</option>
                    <option value="kenya">Kenya</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="south-africa">South Africa</option>
                    <option value="ghana">Ghana</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-primary text-background-dark px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-all">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Job Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading ? (
                <div className="col-span-full text-center py-12">
                  <span className="material-symbols-outlined text-4xl text-primary animate-spin">refresh</span>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">Loading jobs...</p>
                </div>
              ) : jobs.length > 0 ? (
                jobs.map((job) => (
                  <div key={job.id} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        job.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {job.status}
                      </span>
                      <span className="text-lg font-bold text-primary">${job.budget}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{job.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">{job.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">Posted {new Date(job.createdAt).toLocaleDateString()}</span>
                      <button className="bg-primary text-background-dark px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <span className="material-symbols-outlined text-4xl text-slate-400">work_off</span>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">No jobs found matching your criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
