import { useFetch, useUser } from "../../Hooks"
import { generateUrl, serviceMethods, serviceUrls } from "../../Services"

export const Admin = () => {
    const { user } = useUser()

    const url = generateUrl(serviceUrls.BASE, serviceUrls.ADMIN, serviceUrls.EMPLOYEES)
    const { resp: users } = useFetch(url, serviceMethods.GET)

    if (!user) return <div>Loading...</div>
    if (!users || users.status !== 200) return <div>Something went wrong, please refresh this page</div>

    return <div>
        <h1>Welcome {user.username}</h1>
        <div>List of Employees and admins:</div>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            {users.data.map((user: any) => <li key={user.id}>
                <form>
                    <div>Name: {user.username}</div>
                    <button>DELETE USER</button>
                    <p>ROL:</p>
                    {
                        user.rol === 'admin'
                            ? <input type="text" disabled value={user.rol} />
                            : <select>
                                <option selected={user.rol === 'waiter'}>waiter</option>
                                <option selected={user.rol === 'chef'}>chef</option>
                                <option selected={user.rol === 'admin'}>admin</option>
                            </select>
                    }
                    <button onClick={e => e.preventDefault()}>CHANGE ROL</button>
                </form>
            </li>)}
        </ul>
    </div>
}
