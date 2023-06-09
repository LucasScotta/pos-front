import { useState } from 'react'
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
    const { tables, send } = useSocket(socketData)
    const ping = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const data = form.get('data')
        send(data?.toString())
    }
    if (!connected || !tables) return <h1>Loading...</h1>
    return <>
        Dashboard
        <form onSubmit={e => ping(e)}>
            <input type="text" name="data" />
            <button>Enviar data</button>
        </form>
    </>
}
