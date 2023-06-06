import { FormEvent, useState } from "react"
import { login } from "../../Services"
import { useDispatch } from "react-redux"
import { createUser } from "../../Provider/states/user"

export const Login = () => {
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const { user } = useUser()

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
            return dispatch(createUser(data))
        }
        setError("Provided credentials are invalids")
    }

    return (
        <form onSubmit={submit}>
            {!!error && error}
            <input type="text" name="username" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" value="Log-in" />
        </form>
    )
}
