import axiosInstance from '../utils/axiosInstance'
import { LoanApplication } from '../types/global'

export const initialiseApplication = async () => {
  return await axiosInstance.post('/loan/application/new')
}

export const submitApplication = async ({ id, data }: { id: string, data: LoanApplication }) => {
  return await axiosInstance.patch(`/loan/application/${id}/submit`, data)
}