import api from '@/lib/api'
import type { Job, Proposal } from '@/types/api'

export const jobService = {
  async getAllJobs(): Promise<Job[]> {
    const response = await api.get('/jobs')
    return response.data.data || response.data
  },

  async getJobById(id: number): Promise<Job> {
    const response = await api.get(`/jobs/${id}`)
    return response.data.data || response.data
  },

  async createJob(jobData: Partial<Job>): Promise<Job> {
    const response = await api.post('/jobs', jobData)
    return response.data.data || response.data
  },

  async updateJob(id: number, jobData: Partial<Job>): Promise<Job> {
    const response = await api.put(`/jobs/${id}`, jobData)
    return response.data.data || response.data
  },

  async deleteJob(id: number): Promise<void> {
    await api.delete(`/jobs/${id}`)
  }
}

export const proposalService = {
  async getJobProposals(jobId: number): Promise<Proposal[]> {
    const response = await api.get(`/proposals/job/${jobId}`)
    return response.data.data || response.data
  },

  async createProposal(proposalData: Partial<Proposal>): Promise<Proposal> {
    const response = await api.post('/proposals', proposalData)
    return response.data.data || response.data
  },

  async updateProposal(id: number, proposalData: Partial<Proposal>): Promise<Proposal> {
    const response = await api.put(`/proposals/${id}`, proposalData)
    return response.data.data || response.data
  },

  async acceptProposal(id: number): Promise<Proposal> {
    const response = await api.put(`/proposals/${id}/accept`)
    return response.data.data || response.data
  }
}
