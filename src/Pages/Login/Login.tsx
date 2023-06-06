import { FormEvent, useEffect, useState } from "react"
import { login } from "../../Services"
import { createUser, resetUser } from "../../Provider/states/user"
import { useUser } from "../../Hooks/useUser/useUser"
import { useNavigate } from "react-router-dom"
import { path } from "../../helper"

export const Login = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const { dispatch } = useUser()

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget
        const formData = new FormData(form)
        const username = formData.get('username')
        const password = formData.get('password')

        if (!!username && !!password) {
            setError('Loging in...')

            const data = await login(username, password)
            if (data instanceof Error) {
                return setError(data.message)
            }
            dispatch(createUser(data))
            setError("Successfuly loged")
            return navigate(path.DASHBOARD, { replace: true })
        }
        setError("Provided credentials are invalids")
    }
    useEffect(() => {
        dispatch(resetUser())
        navigate(path.LOGIN, { replace: true })
    }, [])
    return (
        <form onSubmit={submit}>
            {!!error && error}
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" value="Log-in" />
        </form>
    )
}
