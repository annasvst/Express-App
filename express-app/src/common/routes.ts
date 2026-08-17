import { Router } from 'express'
import { v1UsersRouter, v2UsersRouter } from '../resources/users/routes'

const v1Router: Router = Router()
v1Router.use('/users', v1UsersRouter)

const v2Router: Router = Router()
v2Router.use('/users', v2UsersRouter)

export { v1Router, v2Router }