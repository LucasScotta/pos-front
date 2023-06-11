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
    const [products, setProducts] = useState<IProduct[]>([])

    const send = (data?: string) => {
        if (!data) return
        const socket = ref.current
        if (!socket || !enabled) return

        socket.emit('change', data)
    }

    useEffect(() => {
        if (!enabled) return
        const socket = io(socketPath)
        socket.on('connect', () => {
            if (onConnected) {
                onConnected()
            }
            socket.emit('auth', userId)
        })
        socket.on('update', ({ products, tables }: { products: IProduct[], tables: ITable[] }) => {
            setProducts(products)
            setTables(tables)
        })
        socket.on('disconnect', () => {
            onDisconnected()
        })
        ref.current = socket
        return () => {
            socket.off('connect')
            socket.off('auth')
            socket.off('update')
        }
    }, [enabled])
    return { tables, products, send }
}