import express from 'express'
import { getCourses,getCoursById } from'../controllers/coursController.js'
const router =express.Router()

router.route('/').get(getCourses)

router.route('/:id').get(getCoursById)


export default router