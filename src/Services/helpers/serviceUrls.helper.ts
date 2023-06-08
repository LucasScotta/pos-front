import { AxiosServiceMethods } from "../../Models"
import { API_PATH, IO_PORT, API_PORT } from "../../config"

const http = `${API_PATH}:${API_PORT}`
const iourl = `${API_PATH}:${IO_PORT}`

const apiPath = () => http
const ioPath = () => iourl
const refreshPath = () => generateUrl(apiPath(), serviceUrls.REFRESH)

export const serviceUrls = {
    BASE: apiPath(),
    IO: ioPath(),
    LOGIN: 'auth',
    ADMIN: 'admin',
    EMPLOYEES: 'users',
    REFRESH: 'refresh',
    refreshPath
}

export const serviceMethods: AxiosServiceMethods = {
    POST: 'post',
    GET: 'get',
    PUT: 'put',
    DELETE: 'delete'
}
export const generateUrl = (...args: string[]) => args.join('/')
