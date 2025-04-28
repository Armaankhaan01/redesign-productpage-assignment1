import axios from 'axios'
import appConfig from '@/configs/app.config'
import type { AxiosError } from 'axios'
import AxiosResponseInterceptorErrorCallback from './AxiosResponseInterceptorErrorCallback'
import AxiosRequestInterceptorConfigCallback from './AxiosRequestInterceptorConfigCallback'

const AxiosBase = axios.create({
    timeout: 60000,
    baseURL: appConfig.apiPrefix,
})

AxiosBase.interceptors.request.use(
    (config) => {
        return AxiosRequestInterceptorConfigCallback(config)
    },
    (error) => {
        return Promise.reject(error)
    },
)

AxiosBase.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        AxiosResponseInterceptorErrorCallback(error)
        return Promise.reject(error)
    },
)

export default AxiosBase
