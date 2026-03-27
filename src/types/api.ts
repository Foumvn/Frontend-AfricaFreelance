export interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  country: string
  userType: string
  profilePicture: string
  bio: string
  createdAt: string
  updatedAt: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  firstName: string
  lastName: string
  email: string
  password: string
  phoneNumber: string
  country: string
  userType: string
}

export interface AuthResponse {
  token: string
  user: User
}

export interface Job {
  id: number
  title: string
  description: string
  budget: number
  status: string
  clientId: number
  createdAt: string
  updatedAt: string
}

export interface Proposal {
  id: number
  jobId: number
  freelancerId: number
  coverLetter: string
  proposedBudget: number
  status: string
  createdAt: string
}
