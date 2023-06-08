import { useRef, useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client';
import { serviceUrls } from '../../Services';

const socketPath = serviceUrls.IO
interface SocketProps {
    userId: number
    enabled: boolean
    onConnected: () => void
    onDisconnected: () => void
}
export const useSocket = ({ userId, enabled, onConnected, onDisconnected }: SocketProps) => {
    const ref = useRef<Socket>()
    const [tables, setTables] = useState<string[]>(['asd'])

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
            console.log('estoy conectado rey')
            if (onConnected) {
                onConnected()
            }
        })
        socket.on('tables', tab => setTables(tab))
        socket.on('reconnect', () => {
            console.log('me estoy re conectando rey')
            socket.emit('auth-me', userId)
        })
        socket.on('disconnect', () => {
            onDisconnected()
            console.log('me estoy desconectando rey')
        })
        ref.current = socket
    }, [enabled])
    return { tables, send }
}