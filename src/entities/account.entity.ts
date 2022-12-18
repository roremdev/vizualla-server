export interface IAccount {
    id: number
    name: string
    email: string
    password: string
    bio: string
    active: boolean
    role: string | 'ADMIN' | 'USER'
    createdAt?: Date | string
    updatedAt?: Date | string
}

export type Account = IAccount
