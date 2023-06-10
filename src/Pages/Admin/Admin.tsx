import { UserCreation, ProductCreation, EmployeesList } from "./Sections"
import { UserInfo } from '../../Models'
import { generateUrl, serviceMethods, serviceUrls } from "../../Services"
import { useFetch, useUser } from "../../Hooks"
import { AxiosError } from "axios"
import { Navigate } from "react-router-dom"
import { path } from "../../helper"

// interface IStoreResponse { users: UserInfo[], products: IProduct[] }
export const Admin = () => {

    const { user } = useUser()
    const url = generateUrl(serviceUrls.BASE, serviceUrls.ADMIN, serviceUrls.EMPLOYEES)
    const { resp, error, loading } = useFetch(url, serviceMethods.GET)

    if (!!error && error.status === 400 || error instanceof AxiosError && error.response?.status === 401) {
        return <Navigate to={path.LOGIN} replace />
    }

    if (!user || !resp || loading) return <div>Loading...</div>
    const users: UserInfo[] = resp.data

    // const { users, products }: { users: UserInfo[], products: IProduct[] } = resp?.data
    if (!users || resp.status !== 200) return <div>Something went wrong, please refresh this page</div>

    return <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center' }}>
        <h1>Welcome {user.username}</h1>
        <EmployeesList users={users} />
        <UserCreation />
        <ProductCreation />
    </div>
}
