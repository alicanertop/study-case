import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'
import { apiConfig } from '../config/api'

const getToken = (key: string): string | undefined | null => localStorage.getItem(key)

function getAuthHeader(headers?: AxiosRequestConfig['headers']): AxiosRequestConfig['headers'] {
  let authHeader: AxiosRequestConfig['headers'] = {}
  let token = getToken('token')
  if (headers) authHeader = { ...headers }
  if (token) authHeader['Authorization'] = `Bearer ${token}`
  return authHeader
}

const httpService: AxiosInstance = axios.create({ ...apiConfig })

httpService.interceptors.request.use(
  (config) => {
    config.headers = { ...getAuthHeader(config.headers) }
    return config
  },
  (error) => Promise.reject(error),
)

httpService.interceptors.response.use(
  <T>(response: AxiosResponse): Promise<T> => Promise.resolve(response.data),
  (error: AxiosError) => {
    let status = error?.response?.status || 0
    // axios timeout connection
    if (error.code === 'ECONNABORTED') status = 504
    return Promise.reject({ status, message: 'Some error happened', error })
  },
)

export default httpService
