import { useEffect, useState } from "react"

interface ErrorHookProps {
    errorMessage?: string
}

export const useError = ({ errorMessage }: ErrorHookProps) => {
    const [error, setError] = useState(errorMessage)
    const [timeError, setTimeError] = useState<NodeJS.Timeout>()

    const setErrorMessage = (message: string) => {
        clearInterval(timeError)
        setError(message)
        setTimeError(setTimeout(() => setError(''), 7000))
    }
    useEffect(() => {
        if (errorMessage) return setErrorMessage(errorMessage)
    }, [])
    return { error, setErrorMessage }
}
