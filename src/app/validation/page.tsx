'use client'

import AppLayout from '@/components/layout/AppLayout'

export default function ValidationPage() {
  return (
    <AppLayout>
      <div className="flex flex-wrap justify-between items-end gap-4 mb-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Delivery Validation</h2>
          <p className="text-slate-500">Project: Visual Identity Redesign - Eco-Tech Solutions</p>
        </div>
        <div className="bg-primary/10 border border-primary/20 p-4 rounded-xl flex flex-col items-end">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Escrow Amount</p>
          <p className="text-2xl font-bold text-primary">1,250.00 €</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">description</span>
              Documents and Files
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800 justify-between group">
                <div className="flex items-center gap-4">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-medium line-clamp-1">Graphic_Charter_V2.pdf</p>
                    <p className="text-slate-500 text-sm">4.8 MB • PDF</p>
                  </div>
                </div>
                <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined text-lg mr-1">download</span> Download
                </button>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800 justify-between group">
                <div className="flex items-center gap-4">
                  <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 shrink-0 size-12">
                    <span className="material-symbols-outlined">folder_zip</span>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="font-medium line-clamp-1">Source_Vector_Assets.zip</p>
                    <p className="text-slate-500 text-sm">32.4 MB • ZIP</p>
                  </div>
                </div>
                <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-sm font-bold hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined text-lg mr-1">download</span> Download
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">gallery_thumbnail</span>
              Visual Gallery
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 cursor-zoom-in group relative">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCERT48NCIiLdXHZY7ncruUW7CkzWy7_L0xIIdto06__Mgkp3CJzH-5JtZBmev140JRmZYVucUsm3CYKYXz8tvfCJYRwlbII6dLldneFkMlxOgyi76KUQaItEASvNbSUvWvAz8yiDaw2bwcMbFTZWuR7BNFic4uS-HGTlGJbuVrS8Cv1g9TPjf0C__PQTnjxJZIl9E5neItZXEDLwi9xJLVYsTTmVS-FKaPtPRf2NqcxZTdzqrBNy9XYE8A5PQ3ZAi1jUcbx7DI71uC" alt="Logo design" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">fullscreen</span>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 cursor-zoom-in group relative">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2vUk900NHP1hddOMvL1-yPIvnVcVTG0ReoXfl0WixjS6fx99vQ7L1_Olyhcr-SZ8uIWzyCcgG5_o0FZjVdheZdzedv-OOpjupUpcR0Qqwa2COFz69oBgh7QMd_jQiLVDpFv7qFmV7BuH2q8onRRl4wvo32kFRjx9QppydPM8d3yU_Iu0UTjIQx1E7nSQVgW4PMM3oLnHt-cCC-OCd0j2uGzxweKcW3-0tOiznsXb9yEJgX__V7DVGp02Wv2U4kVRl2OSU5VSMInfM" alt="Stationery" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">fullscreen</span>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 cursor-zoom-in group relative">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRdLIOWZYmxzQLHWPu-wwLQNGrg5DjVBWoZvqg9Zi_9h78201rvIHfGYxzpNjj06zt5Q_ihOd-jXZr54G-t8ctvQZgLwuBTxDElkK8JPyvMkcEop-b-xBL25SiHt3-PdEtGlhjj28H586KcqgSQcC-7SpjzkHS17cskLB45dYbR8w85FiOVZD-wz3Vv-PmoxvbWmRwDJZACPaHfIxJ0lsXElkTyu-GR6OfkHDwJzlKRr1p9Ah9jW2Th-xMRd9ATbnqJWH4_ueqO3lx" alt="Website UI" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">fullscreen</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">chat_bubble</span>
              Freelancer Note
            </h3>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/30 rounded-lg italic text-slate-700 dark:text-slate-300">
              "Hello, I have completed all the deliverables for your identity redesign. I have included the source vector files as well as an updated PDF version of the graphic charter with the new requested color codes. Feel free if you have any questions before validation."
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-background-dark rounded-xl p-6 shadow-lg border-2 border-primary/20 sticky top-24">
            <h3 className="text-lg font-bold mb-6">Validation Actions</h3>
            <div className="space-y-4">
              <button className="w-full py-4 bg-primary text-slate-950 font-bold rounded-lg flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-md shadow-primary/20">
                <span className="material-symbols-outlined">verified</span>
                Approve & Release Funds
              </button>
              <button className="w-full py-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                <span className="material-symbols-outlined">history_edu</span>
                Request Revision
              </button>
            </div>
            <hr className="my-6 border-slate-200 dark:border-slate-800" />
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                <span>Status</span>
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">Pending Approval</span>
              </div>
              <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                <span>Submitted</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">Oct 24, 2023, 14:30</span>
              </div>
              <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                <span>Validation Period</span>
                <span className="font-medium text-slate-900 dark:text-slate-100">4 days left</span>
              </div>
            </div>
            <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg flex gap-3">
              <span className="material-symbols-outlined text-slate-400">info</span>
              <p className="text-xs text-slate-500 leading-relaxed">
                By clicking approve, you confirm that the work is satisfactory and authorize the transfer of 1,250.00 € to the freelancer's account.
              </p>
            </div>
          </div>

          <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Need Help?</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Check our guide on delivery validation or contact support.</p>
            <a className="text-sm font-bold text-primary hover:underline flex items-center gap-1" href="#">
              Help Center <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
