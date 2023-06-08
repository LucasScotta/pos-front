import { AxiosResponse } from "axios"
import { localDataTokens, setAndPersistData } from "../../../../helper"

export const responseInterceptor = async (response: AxiosResponse) => {
    const token: string = response.data.token
    const exp: string = response.data.exp
    if (!!token && !!exp) {
        setAndPersistData(localDataTokens.jwt, token)
        setAndPersistData(localDataTokens.exp, exp)
    }
    return response
}
