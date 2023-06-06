import axios from 'axios'
import { generateUrl, serviceUrls } from '../helpers'
import { UserInfo } from '../../Models'

/**
 * login Promise function
 * @param username 
 * @param password 
 * @returns 
 */
export const login = async (
    username: FormDataEntryValue,
    password: FormDataEntryValue): Promise<UserInfo | Error> => {
    const url = generateUrl(serviceUrls.BASE, serviceUrls.LOGIN)
    try {
        const { data } = await axios.post(url, { username, password })
        const { user } = data
        return user
    }
    catch (err) {
        if (axios.isAxiosError(err)) {
            return new Error(err.response?.data.message)
        }
        throw new Error('Something went wrong, this could be a problem of routes, please contact the owner or the administrator')
    }
}
