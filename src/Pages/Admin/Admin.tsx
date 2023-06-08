import { useUser } from "../../Hooks"
import { UserCreation, ProductCreation, EmployeesList } from "./Sections"

export const Admin = () => {

    const { user } = useUser()

    if (!user) return <div>Loading...</div>
    return <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center' }}>
        <h1>Welcome {user.username}</h1>
        <EmployeesList />
        <UserCreation />
        <ProductCreation />
    </div>
}
