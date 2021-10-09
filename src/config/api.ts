import { AxiosRequestConfig } from 'axios'

export const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000 * 60 * 30, //30 dk
}
