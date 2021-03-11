import express from 'express'
import  asyncHanlder from 'express-async-handler'
import Cours from '../models/coursModel.js'
const router =express.Router()
// fetch all courses
// get /api/courses
// access public
router.get('/', asyncHanlder(async (req,res)=>{
    const courses = await Cours.find({})
    res.json(courses);
}))
// fetch single cours
// get /api/courses/:id
// access public
router.get('/:id',asyncHanlder(async(req,res)=>{
    const cours = await Cours.findById(req.params.id)
    if(cours){
        res.json(cours);
    }else{
        res.status(404)
        throw new Error('cours not found')
    }
}))


export default router