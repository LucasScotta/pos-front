import axios from "axios"
import { IProductDTO } from "../../../../Models"
import { generateUrl, serviceUrls } from "../../../../Services"

export const sendProducts = async (product: IProductDTO): Promise<boolean | Error> => {
    const url = generateUrl(serviceUrls.BASE, serviceUrls.ADMIN, serviceUrls.CREATE_PRODUCT)
    try {
        const resp = await axios.post(url, { product })
        const { message } = resp.data
        return message
    }
    catch (err) {
        if (axios.isAxiosError(err)) {
            if (!err.response) return new Error('Something went wrong, please try again')
            const { message } = err.response?.data
            return new Error(message)
        }
        throw new Error('Something went wrong, please try again')
    }
}