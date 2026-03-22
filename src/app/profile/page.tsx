'use client'

import AppLayout from '@/components/layout/AppLayout'

const skills = [
  'UI Design', 'UX Research', 'Design Systems', 'Figma', 'Prototyping', 'Webflow', 'React Native', 'Wireframing'
]

const reviews = [
  {
    id: 1,
    name: 'Sarah Mensah',
    initials: 'SM',
    role: 'CEO, GreenGrow Tech',
    date: 'Jan 2024',
    rating: 5,
    text: 'Koffi is a rare talent. He understood our complex requirements for the AgriTech platform instantly and delivered a design that was both beautiful and incredibly functional. Highly recommended!',
  },
  {
    id: 2,
    name: 'Abiola Olatunji',
    initials: 'AO',
    role: 'Product Manager',
    date: 'Dec 2023',
    rating: 5,
    text: 'Great communicator and very patient. Koffi helped us build our design system from scratch. His attention to detail is unmatched.',
  },
]

export default function ProfilePage() {
  return (
    <AppLayout>
      <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="relative">
            <div className="size-32 rounded-full overflow-hidden border-4 border-primary/20">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClQfrslsW2g-G8QVvsRvc6RZLqdrkcJMPOHwVkJcpO1vEXslaK-0Nx_GdKOiuK7Iz2O15fz3cTKs6VO4dzwrH2Ylb4XxvnEgcFOKUsYywQ10JkyKP8lfEio10WYnbamlboNNRQyngUa_bilj_h4upLEZgkrb5u7VM5RciPVnSPL14fPwQb2tqbgww5dQtynqSO0pyijfDjAk4qgKKHHgOMvf4IYfW1VzxZ-ceDqAxVmUp6QXfaDU87g73AaoX--hK_VTmp0KAk4dPo" alt="Koffi Mensah" />
            </div>
            <div className="absolute bottom-1 right-1 bg-primary text-background-dark size-6 rounded-full flex items-center justify-center border-2 border-white dark:border-background-dark" title="Online Now">
              <span className="material-symbols-outlined text-[14px] font-bold">check</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-3xl font-bold">Koffi Mensah</h1>
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-full text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px] fill-icon">verified</span> ID Verified
                </span>
                <span className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2.5 py-0.5 rounded-full text-xs font-bold">
                  <span className="material-symbols-outlined text-[14px] fill-icon">payments</span> Payment Verified
                </span>
              </div>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-2 font-medium leading-tight">Senior UI/UX Designer & Mobile App Architect</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Abidjan, Côte d'Ivoire</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 10:45 AM Local Time</span>
            </div>
          </div>
          <div className="w-full md:w-auto flex flex-col gap-2">
            <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-3 px-8 rounded-lg transition-all shadow-lg shadow-primary/20">Hire Me</button>
            <button className="border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold py-3 px-8 rounded-lg transition-all">Send Message</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
          <div className="text-center">
            <p className="text-2xl font-bold">47</p>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Jobs Completed</p>
          </div>
          <div className="text-center border-x border-slate-100 dark:border-slate-800">
            <p className="text-2xl font-bold">98%</p>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">On-time Rate</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">$45/hr</p>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Hourly Rate</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <div className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
              <p>With over 8 years of experience in creating digital experiences, I specialize in crafting clean, functional, and user-centric designs for mobile and web platforms across Africa and Europe.</p>
              <p>My approach combines strategic thinking with pixel-perfect execution. I've worked with startups in the FinTech, AgriTech, and E-commerce sectors to help them scale through better design systems and intuitive user journeys.</p>
            </div>
            <h3 className="text-lg font-bold mt-8 mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="bg-primary/10 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium border border-primary/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Client Reviews (28)</h3>
              <div className="flex items-center gap-1 text-primary">
                <span className="material-symbols-outlined fill-icon">star</span>
                <span className="font-bold">4.9</span>
                <span className="text-slate-400 text-sm font-normal">(Last 12 months)</span>
              </div>
            </div>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-slate-100 dark:border-slate-800 pb-6 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                      <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500">{review.initials}</div>
                      <div>
                        <h5 className="font-bold">{review.name}</h5>
                        <p className="text-xs text-slate-500">{review.role} • {review.date}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className={`material-symbols-outlined text-sm ${i <= review.rating ? 'fill-icon' : ''}`}>star</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm italic">"{review.text}"</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-3 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors border border-dashed border-slate-300 dark:border-slate-700">
              Load More Reviews
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/20">
            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined">emoji_events</span>
              Top Rated Plus
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Koffi ranks in the top 3% of designers on the platform with a proven history of success on large contracts.
            </p>
          </div>

          <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-sm mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <span className="text-sm font-medium">Share Profile</span>
                <span className="material-symbols-outlined text-slate-400">share</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                <span className="text-sm font-medium">Report Profile</span>
                <span className="material-symbols-outlined text-slate-400">flag</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
