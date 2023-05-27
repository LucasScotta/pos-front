import axios from 'axios'
import { generateUrl, serviceUrls } from '../helpers'
import { UserInfo } from '../../Models'

/**
 * login Promise function
 * @param name 
 * @param password 
 * @returns 
 */
export const login = async (
    name: FormDataEntryValue,
    password: FormDataEntryValue): Promise<UserInfo | Error> => {
    const url = generateUrl(serviceUrls.base, serviceUrls.login)
    try {
        const { data } = await axios.post(url, { name, password })
        return { name: data.name }
    }
    catch (err) {
        if (axios.isAxiosError(err)) {
            return new Error(err.response?.data.message)
        }
        throw new Error('Something went wrong, this could be a problem of routes, please contact the owner or the administrator')
    }
}
