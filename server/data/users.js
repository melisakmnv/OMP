import bcrypt from 'bcryptjs'

export const users = [
    {
        username: 'admin1',
        email: 'admin1@gmail.com',
        password: bcrypt.hashSync('12345', 10),
        role: 'admin'
    },
    {
        username: 'user1',
        email: 'user1@gmail.com',
        password: bcrypt.hashSync('12345', 10),
        role: 'user'
    }
]