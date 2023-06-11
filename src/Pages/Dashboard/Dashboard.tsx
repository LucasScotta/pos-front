import { useState, FormEvent } from 'react'
import { useSelector } from 'react-redux';
import { useSocket } from '../../Hooks';
import { AppStore, } from '../../Models';


export const Dashboard = () => {
    const { user } = useSelector((store: AppStore) => store)
    const [connected, setConnected] = useState(false)
    if (!user.id) return <h1>Loading, no hay User</h1>
    const socketData = {
        userId: user.id,
        enabled: user.id > 0,
        onConnected: () => setConnected(true),
        onDisconnected: () => setConnected(false)
    }
    const { tables, products, send } = useSocket(socketData)
    const ping = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const data = form.get('data')
        send(data?.toString())
    }
    if (!connected || !tables || !products) return <h1>Loading...</h1>
    return <div style={{ display: 'flex', flexDirection: 'column', 'alignItems': 'center' }}>
        <h1>Dashboard</h1>
        <h3>Tables:</h3>
        <ul>
            {
                tables.map(table => {
                    const { id, bill } = table
                    return <li key={id}>
                        Bill: {bill}
                    </li>
                })
            }
        </ul>
        <ul>
            {
                products.map(product => {
                    const { name, price } = product
                    return <li key={name}>
                        <div>Product name: {name}</div>
                        <div>Product price: {price}</div>
                    </li>
                })
            }
        </ul>
        <button>Enviar data</button>
    </div >
}
