import { FormEvent } from 'react'
export const UserCreation = () => {
    const createUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return <form onClick={createUser} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>Register new user</h3>
        <input type="text" name="username" required defaultValue="" />
        <input type="password" name="password" required defaultValue="" />
        <select name="rol" defaultValue="waiter">
            <option value="waiter">Waiter</option>
            <option value="chef">Chef</option>
            <option value="admin">Admin</option>
        </select>
        <button>Create User</button>
    </form>
}
