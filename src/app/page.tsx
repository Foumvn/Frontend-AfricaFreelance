'use client'

import DashboardLayout from '@/components/layout/DashboardLayout'

const activeJobs = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    freelancer: 'Abeba M.',
    freelancerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYXNMQAvKFbivrfv2js9wMUtVzHb50H3NePrLzbpzpIl6ReUsGfZC6epKOFXjBR0nOIBlP1wnTu4u3MsHdgJJiweZJpSzYrdluZchGzDNkQuIH4EbsLlBOZHe9jgxE0enlcO5poYb5kDH2GEtOmYtKNwDkWz2U13LN2D0zVzpIx5rvQ4ewPFamZ8YPSW7f0H38hiJv7j_ix5DrPlJ_2qUSqHI8lj7sPxiVyFbMtFECngTIYyeyudcO1XEqHtfO2SQHMSGkhv7Tl3RZ',
    status: 'In Progress',
    statusColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    budget: '$2,500',
    escrow: 'Funded',
    escrowIcon: 'lock',
    posted: '3 days ago',
  },
  {
    id: 2,
    title: 'Mobile App Backend - Python',
    freelancer: null,
    status: 'Open',
    statusColor: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    budget: '$1,200',
    escrow: 'Pending',
    escrowIcon: 'lock_open',
    posted: '1 week ago',
  },
  {
    id: 3,
    title: 'Brand Identity for Fintech Start-up',
    freelancer: 'Chidi O.',
    freelancerAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsKQgT5HOqHybBRI42vqE6FLsHuEV65UrIi5vth1HD1IyORgPRDF8JYLxdQqDsue-ozb3vWIH4xsjkwWABOZLj39zC11plKXXNAoreDahCOvvG9bf4ei3EwgqEsheyYiy5N17cIeZvRzDhdQVw7hN23RXhTaBBsVtWkCAclnnu1cCQN8BBDPgpGEwznl92Iv1oJneg-AlEDdW0mMDsCj3yAGAr1mSOmP5mkq-noZvcmHJ80nLj_inLtuJTGMXgIIOD8wI5msDlh6HT',
    status: 'Escrow Funded',
    statusColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    budget: '$850',
    escrow: 'Secured',
    escrowIcon: 'verified_user',
    posted: '12 hours ago',
  },
]

const recommendedFreelancers = [
  {
    id: 1,
    name: 'Amara Okafor',
    role: 'UI/UX Designer • Nigeria',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeROIw20y2Q4elUfHkyfCK1t78I_YRTtTlokO1HtwcbxDE-EESMLKLSdGB0wx1tVdXrsSudEraO6HPVM8Qgkghqdy-UVHgtTZR8Nm3T0rKfzBOL4-nIArSrDp9sR84YYo2mBkLYdq9IeAh8CCxKH2P-pPt468pX6WGc47Zi9Wp1EsKxqpLnVxIzF9B-TKMwR-x9dbzb6K3L5JvOlJ6QJstYHlHxtHgu43BJND3rCDiU0EBJhcCMTNbCBnwNnLMsa4WtmjPIXwJP7Pt',
    rating: 4.9,
    rate: '$35/hr',
  },
  {
    id: 2,
    name: 'Kwesi Appiah',
    role: 'Full Stack Dev • Ghana',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8M9pTfuWnAWQGVa4Ir_tRXhVf_dZu3Lngu2VhNghgmRaHxuwClbRgHKpT5oaGjB3dHU8Ihyaib-8-bpYzX6-z65eRuh8LNaSCWJD_fCMAhGYxUa8CXmQjn-dc3irEQb795LT1PfoREeECNd8MbRC1Ipfq9Je8qZ1CHxPsGKfWS7egj6_R_-t-qQOSE29pW3ihn2hT8PPSpkODapx3yxaTDl6ov2Wan0BMMyFXcR5Yedr-I8Wu5NDujyqXgK9WPHxCGiogFIjCFo67',
    rating: 5.0,
    rate: '$50/hr',
  },
]

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Welcome back, John!
          </h2>
          <p className="text-slate-500 mt-1">Here's what's happening with your projects today.</p>
        </div>
        <div className="flex gap-3">
          <div className="text-right">
            <p className="text-xs text-slate-400 uppercase font-bold tracking-wider leading-none mb-1">Last login</p>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">2 hours ago</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-background-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 size-24 bg-primary/5 rounded-full group-hover:scale-110 transition-transform"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <h3 className="font-bold text-slate-700 dark:text-slate-300">Wallet Balance</h3>
          </div>
          <p className="text-3xl font-black text-slate-900 dark:text-white">$12,450.00</p>
          <div className="mt-4 flex items-center text-xs font-bold text-primary">
            <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
            <span>+12% from last month</span>
          </div>
        </div>

        <div className="bg-white dark:bg-background-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 size-24 bg-blue-500/5 rounded-full group-hover:scale-110 transition-transform"></div>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <span className="material-symbols-outlined">account_balance</span>
            </div>
            <h3 className="font-bold text-slate-700 dark:text-slate-300">Escrow Funded</h3>
          </div>
          <p className="text-3xl font-black text-slate-900 dark:text-white">$4,200.00</p>
          <div className="mt-4 flex items-center text-xs font-bold text-slate-500">
            <span>Locked in 3 active projects</span>
          </div>
        </div>

        <div className="bg-primary p-6 rounded-2xl shadow-lg flex flex-col justify-between items-start">
          <div>
            <h3 className="font-bold text-background-dark/80 text-sm uppercase tracking-wider">Ready to scale?</h3>
            <p className="text-xl font-bold text-background-dark mt-1">Hire top talent from across Africa today.</p>
          </div>
          <button className="mt-4 bg-background-dark text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-background-dark/90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined">rocket</span>
            Post New Job
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Active Jobs Summary</h3>
          <a className="text-primary text-sm font-bold hover:underline" href="/my-jobs">View All Jobs</a>
        </div>
        <div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Job Title</th>
                <th className="px-6 py-4">Freelancer</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Budget</th>
                <th className="px-6 py-4">Escrow</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {activeJobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/30 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 dark:text-white">{job.title}</span>
                      <span className="text-xs text-slate-500">Posted {job.posted}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {job.freelancerAvatar ? (
                        <img alt="Freelancer avatar" className="size-6 rounded-full" src={job.freelancerAvatar} />
                      ) : (
                        <div className="size-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400 border border-dashed border-slate-300">?</div>
                      )}
                      <span className={`text-sm font-medium ${job.freelancer ? '' : 'text-slate-400 italic'}`}>
                        {job.freelancer || 'None yet'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${job.statusColor}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold">{job.budget}</td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-1.5 ${job.escrowIcon === 'lock' ? 'text-primary' : 'text-slate-400'}`}>
                      <span className="material-symbols-outlined text-sm">{job.escrowIcon}</span>
                      <span className="text-xs font-bold">{job.escrow}</span>
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-12">
        <div className="bg-white dark:bg-background-dark p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg">Top Recommended Freelancers</h3>
            <button className="text-slate-400 hover:text-slate-600">
              <span className="material-symbols-outlined">refresh</span>
            </button>
          </div>
          <div className="space-y-4">
            {recommendedFreelancers.map((freelancer) => (
              <div key={freelancer.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                <div className="flex items-center gap-3">
                  <img alt="Freelancer" className="size-12 rounded-lg bg-slate-100" src={freelancer.avatar} />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{freelancer.name}</p>
                    <p className="text-xs text-slate-500">{freelancer.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-primary mb-1">
                    <span className="material-symbols-outlined text-sm fill-icon">star</span>
                    <span className="text-sm font-bold ml-1">{freelancer.rating}</span>
                  </div>
                  <p className="text-xs text-slate-400">{freelancer.rate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 dark:bg-slate-950 p-6 rounded-2xl text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[180px]">support_agent</span>
          </div>
          <h3 className="text-xl font-black mb-2">Need help hiring?</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-xs leading-relaxed">
            Our project managers can help you find the perfect talent and manage the delivery for you.
          </p>
          <button className="bg-white text-slate-900 w-fit px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-primary hover:text-background-dark transition-all">
            Talk to an Expert
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}
