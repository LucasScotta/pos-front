import { UserCreation, ProductCreation, EmployeesList, ProductEditor } from "./Sections"
import { IProduct, UserInfo } from '../../Models'
import { generateUrl, serviceMethods, serviceUrls } from "../../Services"
import { useFetch, useUser } from "../../Hooks"
import { AxiosError } from "axios"
import { Navigate } from "react-router-dom"
import { path } from "../../helper"

interface IStoreResponse { users: UserInfo[], products: IProduct[] }
export const Admin = () => {

    const { user } = useUser()
    const url = generateUrl(serviceUrls.BASE, serviceUrls.ADMIN)
    const { resp, error, loading } = useFetch(url, serviceMethods.GET)

    if (!!error && error instanceof AxiosError && error.response?.status === 401) {
        return <Navigate to={path.LOGIN} replace />
    }

    if (!user || !resp || loading) return <div>Loading...</div>
    const { users, products }: IStoreResponse = resp.data

    if (!users || resp.status !== 200) return <div>Something went wrong, please refresh this page</div>

    return <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center' }}>
        <h1>Welcome {user.username}</h1>
        <EmployeesList username={user.username} users={users} />
        <UserCreation />
        <ProductCreation />
        <ProductEditor products={products} />
    </div>
}
