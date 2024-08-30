import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'
// import { verifyAToken } from '../middleware/AuthenticateUser.js'

const clientsRouter = express.Router()

clientsRouter.use(bodyParser.json())

clientsRouter.get('/', (req, res) => {
    products.fetchProducts(req, res)
})
export {
    clientsRouter
}
