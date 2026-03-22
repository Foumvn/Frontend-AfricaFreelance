'use client'

import AppLayout from '@/components/layout/AppLayout'

interface Job {
  id: number
  category: string
  title: string
  budget: string
  description: string
  location: string
  posted: string
  tags: string[]
  paymentStatus: 'verified' | 'pending'
  portfolioAllowed?: boolean
}

const jobs: Job[] = [
  {
    id: 1,
    category: 'Web Development',
    title: 'E-commerce Platform for Local Artisans',
    budget: '$1,500 - $3,000',
    description: 'We are looking for a senior full-stack developer based in West Africa to build a custom marketplace connecting rural artisans with global buyers. Experience with headless CMS and payment gateways like Paystack/Flutterwave is essential...',
    location: 'Lagos, Nigeria',
    posted: '2 hours ago',
    tags: ['React', 'Node.js', 'Escrow'],
    paymentStatus: 'verified',
    portfolioAllowed: true,
  },
  {
    id: 2,
    category: 'Design',
    title: 'Branding Identity for Fintech Startup',
    budget: '$800',
    description: 'Seeking a creative UI/UX designer to create a comprehensive branding package including logo, typography, and high-fidelity mobile app designs for a new micro-lending platform...',
    location: 'Nairobi, Kenya',
    posted: '5 hours ago',
    tags: ['Figma', 'UI/UX', 'Escrow'],
    paymentStatus: 'verified',
    portfolioAllowed: true,
  },
  {
    id: 3,
    category: 'Marketing',
    title: 'Social Media Growth Strategist',
    budget: '$400 / month',
    description: 'We need a growth hacker focused on the South African market to handle our TikTok and Instagram presence. Must have a proven track record of growing service-based business accounts...',
    location: 'Cape Town, SA',
    posted: '1 day ago',
    tags: ['TikTok', 'ADS'],
    paymentStatus: 'pending',
    portfolioAllowed: true,
  },
]

function JobCard({ job }: { job: Job }) {
  return (
    <div className="group bg-white dark:bg-background-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <span className="text-primary text-xs font-bold uppercase tracking-widest">{job.category}</span>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xl font-bold">{job.budget}</span>
          <div className={`flex items-center gap-1 font-bold text-[10px] px-2 py-0.5 rounded border ${
            job.paymentStatus === 'verified'
              ? 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900'
              : 'text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700'
          }`}>
            <span className="material-symbols-outlined text-sm">
              {job.paymentStatus === 'verified' ? 'verified' : 'pending'}
            </span>
            {job.paymentStatus === 'verified' ? 'VERIFIED PAYMENT' : 'PAYMENT PENDING'}
          </div>
          {job.portfolioAllowed && (
            <div className="mt-2 flex items-center gap-1 text-primary font-bold text-[10px] bg-primary/5 px-2 py-0.5 rounded border border-primary/20">
              <span className="material-symbols-outlined text-sm">attachment</span>
              PORTFOLIO ALLOWED
            </div>
          )}
        </div>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4">
        {job.description}
      </p>
      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
        <div className="flex gap-4">
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <span className="material-symbols-outlined text-sm">location_on</span>
            {job.location}
          </div>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <span className="material-symbols-outlined text-sm">schedule</span>
            Posted {job.posted}
          </div>
        </div>
        <div className="flex gap-2">
          {job.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function JobsPage() {
  return (
    <AppLayout>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Find Work</h2>
          <p className="text-slate-500 mt-1">Browse and apply for jobs that match your skills</p>
        </div>
      </div>

      <section className="bg-white dark:bg-background-dark p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 items-end">
        <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Job Category</label>
          <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent">
            <option>All Categories</option>
            <option>Web Development</option>
            <option>UI/UX Design</option>
            <option>Digital Marketing</option>
            <option>Writing & Translation</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Budget Range ($)</label>
          <div className="flex items-center gap-3">
            <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary" placeholder="Min" type="number" />
            <span className="text-slate-400">-</span>
            <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary" placeholder="Max" type="number" />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Country</label>
          <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary">
            <option>Select Country</option>
            <option>Nigeria</option>
            <option>Kenya</option>
            <option>South Africa</option>
            <option>Ghana</option>
            <option>Egypt</option>
          </select>
        </div>
        <button className="h-10 px-6 bg-primary text-slate-900 font-bold rounded-lg text-sm hover:opacity-90 transition-all">
          Apply Filters
        </button>
      </section>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg">Recommended Jobs</h3>
          <p className="text-xs text-slate-500 font-medium">Showing {jobs.length} active listings</p>
        </div>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}

        <div className="flex justify-center items-center gap-2 mt-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:bg-primary transition-colors">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-slate-900 font-bold">1</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:bg-primary transition-colors">2</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:bg-primary transition-colors">3</button>
          <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 hover:bg-primary transition-colors">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </AppLayout>
  )
}
