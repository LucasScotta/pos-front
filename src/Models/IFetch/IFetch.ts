import { AxiosError, AxiosResponse } from "axios"
import { IProduct, UserInfo } from ".."

export interface IFetch extends AxiosResponse {
    products?: IProduct[]
    users?: UserInfo[]
}
export interface IFetchError extends AxiosError {
    redirect?: boolean
}
