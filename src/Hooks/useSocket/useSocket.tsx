import { useRef, useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client';
import { serviceUrls } from '../../Services';
import { IProduct, ITable } from '../../Models';

const socketPath = serviceUrls.IO
interface SocketProps {
    userId: number
    enabled: boolean
    onConnected: () => void
    onDisconnected: () => void
}
export const useSocket = ({ userId, enabled, onConnected, onDisconnected }: SocketProps) => {
    const ref = useRef<Socket>()
    const [tables, setTables] = useState<ITable[]>([])

    const send = (data?: string) => {
        if (!data) return
        const socket = ref.current
        if (!socket || !enabled) return

        socket.emit('change', data)
    }

    useEffect(() => {
        if (!enabled) return
        const socket = io(socketPath)
        socket.emit('auth', userId)
        socket.on('connect', () => {
            if (onConnected) {
                onConnected()
            }
        })
        socket.on('tables', tab => setTables(tab))
        socket.on('reconnect', () => {
            socket.emit('auth-me', userId)
        })
        socket.on('disconnect', () => {
            onDisconnected()
        })
        ref.current = socket
    }, [enabled])
    return { tables, send }
}