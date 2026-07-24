import { Router } from 'express'
import userController from './controller'

const router = Router()

// define routes
router.route('/').get(userController.getAll)
router.route('/').post(userController.createV1) // <-- POST isteğini buraya bağlıyoruz
router.route('/').post(userController.createV2)
 
export default router
