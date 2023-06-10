import { Fragment } from 'react'
import { UserInfo } from '../../../../Models'
interface EmployeesListInterface { users: UserInfo[] }
export const EmployeesList = ({ users }: EmployeesListInterface) => {

    return <>
        <div>List of Employees and admins:</div>
        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            {users.map((user: any) => user.username === user.username ? <Fragment key={user.id}></Fragment>
                : <li key={user.id}>
                    <form onSubmit={e => e.preventDefault()}>
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
