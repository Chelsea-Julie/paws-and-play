import express from 'express'
import bodyParser from 'body-parser'
import { User } from '../model/users.js'
// import { verifyAToken } from '../middleware/AuthenticateUser.js'

const userRouter = express.Router()

userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => {
    User.fetchUsers(req, res)
})


userRouter.get('/:id', (req, res) => {
    User.fetchOneUser(req, res)
})

userRouter.patch('/:id', (req, res) => {
    User.updateUser(req, res)
})

userRouter.post('/register', (req, res) => {
    User.registerUser(req, res)
})
userRouter.post('/login', (req, res) => {
    User.loginUser(req, res)
})

userRouter.delete('/:id', (req, res) => { 
    User.deleteUser(req, res)
})




export {
    userRouter,
    express
}







