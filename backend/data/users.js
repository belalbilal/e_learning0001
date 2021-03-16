import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'belal akashi',
    email: 'akashi@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'bilal akagami',
    email: 'akagami@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
]

export default users