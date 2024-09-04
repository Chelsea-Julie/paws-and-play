import express from 'express'
import bodyParser from 'body-parser'
import { Services } from '../model/services.js'
// import { verifyAToken } from '../middleware/AuthenticateUser.js'

const servicesRouter = express.Router()

servicesRouter.use(bodyParser.json())

servicesRouter.get('/', (req, res) => {
    Services.fetchServices(req, res)
})

servicesRouter.get('/:id', (req, res) => {
    Services.fetchOneService(req, res)
})

servicesRouter.post('/addService', (req, res) => {
    Services.addService(req, res)
})

servicesRouter.patch('/:id', (req, res) => {
    Services.updateService(req, res)
})

servicesRouter.delete('/:id', (req, res) => {
    Services.deleteService(req, res)
})



export {
    servicesRouter,

}