import axios, { AxiosError } from "axios"
import { generateUrl, serviceMethods, serviceUrls } from "../../../../Services"

export const deleteUser = async (id: number): Promise<{ message: string, status?: number }> => {

    const { BASE, ADMIN, USERS } = serviceUrls
    const url = generateUrl(BASE, ADMIN, USERS, id.toString())
    try {
        const resp = await axios[serviceMethods.DELETE](url)
        const { status } = resp
        const message = status === 200 ? 'Delete!' : 'Something went wrong deleting user, please try again'
        return { message, status }
    }
    catch (e) {
        return !!e && e instanceof AxiosError
            ? { message: e.response?.data.message, status: e.status }
            : { message: 'Couldn\'t be deleted, please try again' }
    }

}
