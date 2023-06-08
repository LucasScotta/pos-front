import { Fragment, FormEvent } from 'react'
import { AxiosError } from "axios"
import { useFetch, useUser } from "../../../Hooks"
import { generateUrl, serviceMethods, serviceUrls } from "../../../Services"
import { Navigate } from "react-router-dom"
import { path } from "../../../helper"

export const EmployeesList = () => {
    const { user: adminUser } = useUser()
    const url = generateUrl(serviceUrls.BASE, serviceUrls.ADMIN, serviceUrls.EMPLOYEES)
    const { resp: users, error, loading } = useFetch(url, serviceMethods.GET)

    const changeRol = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    if (loading || !adminUser) return <div>Loading employees, please wait</div>

    if (error instanceof AxiosError && error.response?.status === 401) {
        return <Navigate to={path.LOGIN} replace />
    }
    if (!users || users.status !== 200) return <div>Something went wrong, please refresh this page</div>
    return <>
        <div>List of Employees and admins:</div>
        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            {users.data.map((user: any) => adminUser.username === user.username ? <Fragment key={user.id}></Fragment>
                : <li key={user.id}>
                    <form onSubmit={changeRol}>
                        <div>Name: {user.username}</div>
                        <button>DELETE USER</button>
                        <p>ROL:</p>
                        <select defaultValue={user.rol}>
                            <option>waiter</option>
                            <option>chef</option>
                            <option>admin</option>
                        </select>
                        <button>CHANGE ROL</button>
                    </form>
                </li>)}
        </ul>
    </>
}
