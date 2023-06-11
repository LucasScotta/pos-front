import axios from "axios"
import { AxiosMethod, IFetch, IFetchError } from "../../Models"
import { useEffect, useState } from "react"

export const useFetch = (url: string, method: AxiosMethod, data: any = {}) => {
    const [resp, setResp] = useState<IFetch>()
    const [error, setError] = useState<IFetchError>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios[method](url, data)
            .then(resp => {
                if (!resp.data) throw new Error('que paso bolo')
                const data: IFetch = resp.data
                setResp(data)
            })
            .catch((e) => setError(e))
            .finally(() => setLoading(false))
    }, [])

    return { loading, error, resp }
}
