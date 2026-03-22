'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isReset, setIsReset] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsReset(true)
  }

  const isPasswordStrong = password.length >= 8 && 
    /[A-Z]/.test(password) && 
    /[0-9]/.test(password)

  if (isReset) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center p-8">
        <div className="w-full max-w-md text-center">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl border border-slate-200 dark:border-slate-800">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
            </div>

            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
              Password Reset!
            </h2>
            <p className="text-slate-500 mb-8">
              Your password has been successfully reset. You can now sign in with your new password.
            </p>

            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 w-full bg-primary text-background-dark font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
            >
              Sign In
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    )
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
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">lock_reset</span>
          </div>

          <h2 className="text-2xl font-black text-slate-900 dark:text-white text-center mb-2">
            Set New Password
          </h2>
          <p className="text-slate-500 text-center mb-6">
            Your new password must be different from previous passwords.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                New Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">lock</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
              {password && (
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${password.length >= 8 ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                    <span className="text-xs text-slate-500">At least 8 characters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${/[A-Z]/.test(password) ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                    <span className="text-xs text-slate-500">At least one uppercase letter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${/[0-9]/.test(password) ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                    <span className="text-xs text-slate-500">At least one number</span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">lock</span>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    confirmPassword && password !== confirmPassword
                      ? 'border-red-500'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <span className="material-symbols-outlined">{showConfirmPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
              {confirmPassword && password !== confirmPassword && (
                <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
              )}
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">security</span>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                For security, this link will expire in 24 hours. If you didn't request this, please ignore this email.
              </p>
            </div>

            <button
              type="submit"
              disabled={!isPasswordStrong || password !== confirmPassword}
              className="w-full bg-primary text-background-dark font-bold py-4 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reset Password
              <span className="material-symbols-outlined">check</span>
            </button>
          </form>

          <Link href="/login" className="flex items-center justify-center gap-2 mt-6 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}
