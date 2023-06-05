type RolType = 'waiter' | 'chef' | 'admin'
export interface UserInfo {
    id: number
    username: string
    rol: RolType
}
