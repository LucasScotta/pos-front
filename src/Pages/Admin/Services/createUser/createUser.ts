import axios, { AxiosError } from "axios"
import { generateUrl, serviceMethods, serviceUrls } from "../../../../Services"

interface CreateUserDTO { username: string, password: string }
export const createUser = async ({ username, password }: CreateUserDTO): Promise<string> => {

    const { BASE, ADMIN, CREATE_USER } = serviceUrls
    const url = generateUrl(BASE, ADMIN, CREATE_USER)
    try {
        const resp = await axios[serviceMethods.POST](url, { username, password })
        const { status } = resp
        return status === 201 ? 'Created!' : 'Something went wrong creating user, please try again'
    }
    catch (e) {
        const message =
            !!e && e instanceof AxiosError
                ? e.response?.data.message
                : 'Couldn\'t be created, please try again'
        return message
    }

}
