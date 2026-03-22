'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary rounded-lg p-2 flex items-center justify-center">
            <span className="material-symbols-outlined text-background-dark font-bold">rocket_launch</span>
          </div>
          <h1 className="text-slate-900 dark:text-white font-bold text-xl">Africa-Freelance</h1>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-800">
          {!sent ? (
            <>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">lock_reset</span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 dark:text-white text-center mb-2">
                Forgot Password?
              </h2>
              <p className="text-slate-500 text-center mb-6">
                No worries, we'll send you reset instructions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">mail</span>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-background-dark font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Send Reset Link
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>

              <Link href="/login" className="flex items-center justify-center gap-2 mt-6 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Sign In
              </Link>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-3xl">mark_email_read</span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 dark:text-white text-center mb-2">
                Check Your Email
              </h2>
              <p className="text-slate-500 text-center mb-6">
                We sent a password reset link to <span className="font-semibold text-slate-700 dark:text-slate-300">{email}</span>
              </p>

              <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-slate-400">info</span>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    If you don't receive the email within 5 minutes, check your spam folder or{' '}
                    <button onClick={() => setSent(false)} className="text-primary font-semibold hover:underline">
                      try again
                    </button>
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 rounded-xl p-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">security</span>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  For security, the link will expire in 24 hours.
                </p>
              </div>

              <Link href="/login" className="flex items-center justify-center gap-2 mt-6 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
                Back to Sign In
              </Link>
            </>
          )}
        </div>

        <p className="text-center text-slate-500 mt-6">
          Don't have an account?{' '}
          <Link href="/register" className="text-primary font-bold hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}
