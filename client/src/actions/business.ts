import axiosInstance from '../utils/axiosInstance'
// types
import { Provider } from '../types/global'

export const fetchBusinessBalanceSheet = async ({ provider }: { provider: Provider }) => {
  return await axiosInstance.get(`/business/${12}/balance-sheet`, {
    params: { provider }
  })
}