export interface User {
    id: string
    email: string
    name: string
    role: 'user' | 'admin'
}

export interface Credentials {
    username: string
    password: string
}