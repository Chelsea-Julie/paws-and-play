import express from 'express'
import bodyParser from 'body-parser'
import { User } from '../model/users.js'
import { Bookings } from '../model/bookings.js'
// import { verifyAToken } from '../middleware/AuthenticateUser.js'

const userRouter = express.Router()

userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => {
    User.fetchUsers(req, res)
})


userRouter.get('/singleUser/:id', (req, res) => {
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

// Bookings endpoints 

userRouter.get('/orders', (req, res) => {
    Bookings.fetchAllBookings(req, res)
})

userRouter.get('/:id/orders', (req, res) => {
    Bookings.onePersonsBookings(req, res)
})

userRouter.get('/:id/order/:bookid', (req, res) => {
    Bookings.onePersonsBooking(req, res)
})

userRouter.post('/:id/order', (req, res) => {
    Bookings.addBooking(req, res)
})

userRouter.patch('/:id/order/:bookid', (req, res) => {
    Bookings.updateBooking(req, res)
})

userRouter.delete('/:id/order', (req, res) => {
    Bookings.deleteBookingS(req, res)
})

userRouter.delete('/:id/order/:bookid', (req, res) => {
    Bookings.deleteBooking(req,res)
});


export {
    userRouter,
    express
}







