'use client'

import { useEffect, useState } from 'react'
import { authService } from '@/services/auth'
import { useRouter } from 'next/navigation'

interface AuthGuardProps {
  children: React.ReactNode
  requiredUserType?: 'Client' | 'Freelancer'
}

export function AuthGuard({ children, requiredUserType }: AuthGuardProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const checkAuth = async () => {
      if (!authService.isAuthenticated()) {
        router.push('/login')
        return
      }

      try {
        const currentUser = authService.getUser()
        if (currentUser) {
          setUser(currentUser)
          
          // Check user type if required
          if (requiredUserType && currentUser.userType !== requiredUserType) {
            const redirectPath = currentUser.userType === 'Freelancer' 
              ? '/dashboard/freelancer' 
              : '/dashboard/client'
            router.push(redirectPath)
            return
          }
        } else {
          // Try to get current user from API
          const userData = await authService.getCurrentUser()
          setUser(userData)
          
          if (requiredUserType && userData.userType !== requiredUserType) {
            const redirectPath = userData.userType === 'Freelancer' 
              ? '/dashboard/freelancer' 
              : '/dashboard/client'
            router.push(redirectPath)
            return
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        authService.logout()
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [router, requiredUserType])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <span className="material-symbols-outlined text-4xl text-primary animate-spin">refresh</span>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
