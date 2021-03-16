import express from 'express' 
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import coursRoutes from './routes/coursRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler}  from './middleWare/errorMiddleWare.js'
dotenv.config();
connectDB()
const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('API IS runing');
})
app.use('/api/courses',coursRoutes)
app.use('/api/users',userRoutes)
app.use(notFound)
app.use(errorHandler)
const PORT=process.env.PORT

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))