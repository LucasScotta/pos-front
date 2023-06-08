import { AxiosServiceMethods } from "../../Models/AxiosServiceMetod"

export const serviceUrls = {
    BASE: 'http://localhost:8080',
    LOGIN: 'auth',
    ADMIN: 'admin',
    EMPLOYEES: 'users',
    REFRESH: 'auth/refresh',
}

export const serviceMethods: AxiosServiceMethods = {
    POST: 'post',
    GET: 'get',
    PUT: 'put',
    DELETE: 'delete'
}
export const generateUrl = (...args: string[]) => args.join('/')
