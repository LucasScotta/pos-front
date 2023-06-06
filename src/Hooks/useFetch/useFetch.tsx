import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { AxiosMethod } from "../../Models/AxiosMethod"

export const useFetch = (url: string, method: AxiosMethod, data: any = {}) => {
    const [resp, setResp] = useState<AxiosResponse>()
    const [error, setError] = useState<Error>()
    useEffect(() => {
        axios[method](url, data)
            .then(resp => setResp(resp))
            .catch(e => setError(e))
    }, [])
    return { resp, error }
}
