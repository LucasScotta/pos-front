type RolType = 'waiter' | 'chef' | 'admin'
export interface UserInfo {
    id: number
    name: string
    rol: RolType
}
