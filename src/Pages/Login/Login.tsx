import { FormEvent, useState } from "react"

export const Login = () => {
    const [error, setError] = useState('')
    const submitLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const formData = new FormData(form)
        const user = formData.get('user')
        const password = formData.get('password')
        if (!!user && !!password) {
            setError('Loging in...')
            // Logear
        }
        else {
            setError("Provided credentials are invalids")
            // Mostrar error
        }
    }
    return (
        <form onSubmit={submitLogin}>
            {!!error && error}
            <input type="text" name="user" placeholder="username" />
            <input type="password" name="password" placeholder="password" />
            <input type="submit" value="Log-in" />
        </form>
    )
}