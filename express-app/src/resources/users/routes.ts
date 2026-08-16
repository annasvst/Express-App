import { Router } from 'express'
import userController from './controller'

const v1UsersRouter = Router()
v1UsersRouter.route('/').get(userController.getAll)
v1UsersRouter.route('/').post(userController.createV1)

const v2UsersRouter = Router()
v2UsersRouter.route('/').post(userController.createV2)

export { v1UsersRouter, v2UsersRouter }
