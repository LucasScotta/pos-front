import axios from "axios"
import { generateUrl, serviceMethods, serviceUrls } from "../../../../Services"

export const deleteProduct = (id: number) => {
    const { BASE, ADMIN, DELETE_PRODUCT } = serviceUrls
    const url = generateUrl(BASE, ADMIN, DELETE_PRODUCT)
    console.log(id, url)
    return axios[serviceMethods.DELETE](url, { productId: id })
        .then(resp => {
            const { data } = resp
            console.log(resp)
            return { resp, data }
        })
        .catch(err => {
            console.log(err)
            return ({ err })
        })
}
