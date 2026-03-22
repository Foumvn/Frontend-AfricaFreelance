'use client'

import AppLayout from '@/components/layout/AppLayout'

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      name: 'Abebe Bikila',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB__Y-ZgFIF0zPX2xRY8g0764ush7Q-eyurFcCmnZ5s6FUy0Zb6MvR4MGbR_QEuoSNMlAoD2PsGFFFMVYSXhL_dKBggDyABQ8PgTAyiedALn7ZGx4FGyNQ24ur19SDuk-7RYJ88OQaetewIszgrEM1Yn3VV3LfSo-Ho5qulrBjGHQkxtbk7TDdUs8EYW3CNDO5V_NEKvfG2aEjF1Ega4YvzP35ildHKjdIclr9Io6Kummf-40tNQbaHpC13S7JwXccdjaa85UuAogwi',
      lastMessage: 'I have reviewed the logo drafts...',
      time: '10:45 AM',
      isOnline: true,
      isActive: true,
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu4vXW5e2iRpegT3qQUwEuxjhOGUzNqiawsBhPTyd5kl38prPRO1dcWaM4zBLfdUkWDhQPAgPKJXrcILSInw4-EfU4WY3lJSMuR70cf5-icLsxixmwcAQz1SmPnEqpAvjyqYbStsZNp7_6k2MKn8H-60UA0SXpe4NYuA2MHPzeM7hvy7Fyvp3viVNMYDbJqofCs6bnaISFYSR-QFXnPJoA-9Mvt9gZ5FkjGJLg-431kM80HGcWFuuPD6EltmlGpq9HxDc6iACHG0eH',
      lastMessage: 'Can we schedule a call for the project sync?',
      time: 'Yesterday',
      isOnline: false,
      isActive: false,
      unread: true,
    },
    {
      id: 3,
      name: 'Kofi Mensah',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfSND2u-AjtBdAVVlAshgCdqASugs-w6Y3g6j9DTfoEhEp5nzF4WPiW7sBPKA4P7wPEsS1-dydvTsiHL2UrJqF07jkVC_qc7bL3KciFHiw1XRlB-4W8L4Uq3Kp5bly4X9fz59Pxvo3j4mhb2BW6dCupjqQSKHydePyQxwbxAfok6gQ2ohCDlULsphAHSRwLlKk-cJR3mwpK_oNteqPyWRorgZIEu0ynpeJIvZfhX-EXnPYMw9mjBBzet1m_Fj2E_O-qo_5-F7FU-xc',
      lastMessage: 'The frontend deployment is complete and ready.',
      time: '2 days ago',
      isOnline: false,
      isActive: false,
    },
    {
      id: 4,
      name: 'David Chen',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf8MYXM-9DNsv4dnjOMeMe6Mne6ZxK5T_0m_2p8DiSFxdhWf8l_xDy4q7AgfJtRlTRHvQyClGRl_WwFdMkhzDbbGWYygFeGoa7gI65MrbPLd8k7EAuU5rbC794dtFlutDzkz17SjZqWd6LN8s3Mlv_WfWMeKiImk3VL9T90J08YR2RoCaUnW8k35as8qBRcYb8i2p4dkVH1bZwVdm_qKpZIoa8hZ93J2egSWsYzk3_iq4ZshuSUrDMMOOHWoQfpALjus6osUoqUtNo',
      lastMessage: 'Thanks for the quick turnaround on the API!',
      time: 'Oct 24',
      isOnline: false,
      isActive: false,
    },
  ]

  const messages = [
    {
      id: 1,
      type: 'received',
      text: "Hi there! I've had a chance to look at the three logo concepts you sent over. I really like the direction of the first one with the minimalist icon.",
      time: '10:42 AM',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw9IS9FzO4eqRaVQ5vnJQ1FVoI2ho664BLJjz6Y9sKKML82XT12rgNUevIkGALLwq6uC0MJBVBzc0goPoH4FDAfTTR8Z4Rfkew-eJ7rkSAGKNAJMMPCTpUejZCgMcqFM5HiM8c6jAzSmeFB3ox7tLgrDdujotxxCZDd4w4-62gdRBRdoaNEqd5Psu8fO-OqpdVzsRKltrjUKjNZjt-DGgfjFF9iddrDokhhqORU6M-riodFoJEwzJSvAOvJAyE198eSwNfkyzpFHNB',
    },
    {
      id: 2,
      type: 'sent',
      text: "That's great to hear, Abebe! I also felt the minimalist approach worked best for the brand identity. Should I proceed with refining that specific version?",
      time: '10:44 AM',
      read: true,
    },
    {
      id: 3,
      type: 'received',
      text: "Yes, please. I have a few notes on the color palette. Here's a document with some inspirations from our marketing team.",
      time: '10:45 AM',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuqyS-Rx7HMDL4AP-O6tkT_JFSXVpdblq86bmXASL9YVwvt29mNOKD87SLrkkgl8RIoBF4fBVLdUhk9RyNPZ6iTJxc28yzrz1kOaCDLqOOkjXnaD8DXSH30WL2PigS_lK1hvAurPf9Si0jeWQZSQZAg5aR42elY-pU4GCuwMFFhmN1I4VEca_oyceWmrTrZ-Iiu7ia6RfDrE_zoV7Nr_moru4S4-qt0jg6RMMrewB7BI30ik8SMEJYjyCOdbYmo8UQcUT1uGV0yFD6',
      hasAttachment: true,
    },
  ]

  return (
    <AppLayout>
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Messages</h2>
          <p className="text-slate-500 mt-1">Communicate with freelancers and clients</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-background-dark px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all">
          <span className="material-symbols-outlined">edit_square</span>
          New Message
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 bg-white dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              <button className="px-3 py-1 rounded-full bg-primary text-slate-900 text-xs font-semibold whitespace-nowrap">All Chats</button>
              <button className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold whitespace-nowrap hover:bg-slate-200 transition-colors">Unread</button>
              <button className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold whitespace-nowrap hover:bg-slate-200 transition-colors">Archived</button>
            </div>
          </div>
          <div className="overflow-y-auto max-h-[500px]">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                className={`p-4 flex gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${
                  conv.isActive ? 'bg-primary/5 border-l-4 border-primary' : 'border-b border-slate-100 dark:border-slate-800/50'
                }`}
              >
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover" src={conv.avatar} alt={conv.name} />
                  </div>
                  {conv.isOnline && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-primary border-2 border-white dark:border-background-dark rounded-full"></div>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-0.5">
                    <h3 className="font-semibold text-sm truncate">{conv.name}</h3>
                    <span className="text-[10px] text-slate-500">{conv.time}</span>
                  </div>
                  <p className={`text-xs line-clamp-1 ${conv.unread ? 'text-slate-600 dark:text-slate-400 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>
                    {conv.lastMessage}
                  </p>
                </div>
                {conv.unread && <div className="shrink-0 flex items-center"><div className="w-2 h-2 bg-primary rounded-full"></div></div>}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-8 bg-white dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxfptrhpDU7K0_f5anddYEBokv9VSNABDagMdph9VrGJskKyLL6GbxRh91obVAgIjx3PUdzHxbqF_0c9aOFiEvMG1ssIeNLLZbTm0RHt5Tufe9_KwX3bWrG2kdu72YjmG9NLd-peno0Ivq_sfENueX-a6l5lObt_lpRMrEvxBHh-Pqn6XV17bofGGysTPVdMCAzgYafTHf7vvBGu7gQa4tTK9dkStkkRpQQgBUqKCbfIdnxlkjL0LfmBmf1KklEk73mBxlBlMzxZS1" alt="Abebe" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary border-2 border-white dark:border-background-dark rounded-full"></div>
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Abebe Bikila</h3>
                <span className="text-xs text-primary font-medium">Online</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 transition-colors">
                <span className="material-symbols-outlined">call</span>
              </button>
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 transition-colors">
                <span className="material-symbols-outlined">videocam</span>
              </button>
              <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-400 transition-colors">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 dark:bg-background-dark/20">
            <div className="flex justify-center">
              <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 bg-white dark:bg-slate-800 px-3 py-1 rounded-full shadow-sm">Today</span>
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 max-w-[80%] ${msg.type === 'sent' ? 'flex-row-reverse ml-auto' : ''}`}>
                {msg.type === 'received' && (
                  <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                    <img className="w-full h-full object-cover" src={msg.avatar} alt="" />
                  </div>
                )}
                <div>
                  <div className={`p-4 rounded-xl shadow-sm border ${msg.type === 'sent' ? 'bg-primary rounded-tr-none text-slate-900' : 'bg-white dark:bg-slate-800 rounded-tl-none border-slate-200 dark:border-slate-700'}`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    {msg.hasAttachment && (
                      <div className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 mt-3">
                        <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 flex items-center justify-center rounded-lg text-red-600">
                          <span className="material-symbols-outlined">picture_as_pdf</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold truncate">Brand_Inspirations.pdf</p>
                          <p className="text-[10px] text-slate-400 uppercase">2.4 MB</p>
                        </div>
                        <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-800 rounded">
                          <span className="material-symbols-outlined text-xl">download</span>
                        </button>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 ml-1 inline-block">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-end gap-2 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl border border-slate-200 dark:border-slate-700 focus-within:border-primary transition-all">
              <div className="flex pb-1">
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-500 dark:text-slate-400 transition-colors">
                  <span className="material-symbols-outlined">add_circle</span>
                </button>
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-500 dark:text-slate-400 transition-colors">
                  <span className="material-symbols-outlined">image</span>
                </button>
              </div>
              <textarea className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 px-2 resize-none no-scrollbar max-h-32 placeholder:text-slate-500" placeholder="Type a message..." rows={1}></textarea>
              <div className="flex items-center gap-1 pb-1 pr-1">
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-slate-500 dark:text-slate-400 transition-colors">
                  <span className="material-symbols-outlined">mood</span>
                </button>
                <button className="flex items-center justify-center w-10 h-10 bg-primary text-slate-900 rounded-lg shadow-md hover:scale-105 active:scale-95 transition-all">
                  <span className="material-symbols-outlined font-bold">send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
