import { Router } from 'express'
import moviesController from './api/controllers/movies/router'
const router = Router()

router.use('/movies', moviesController)

export default router
