import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import courses from './data//courses.js'
import Cours from './models/coursModel.js'
import User from './models/userModel.js'
import connectDB from './config/db.js'
dotenv.config()
connectDB()
const importData = async()=>{
    try{
        await Cours.deleteMany()
        await User.deleteMany()
        const createUsers= await User.insertMany(users)
        const adminUser= createUsers[0]._id
        const sampleCourses=courses.map((crs)=>{
            return {...crs,user:adminUser}
            
        })
        await Cours.insertMany(sampleCourses)
        console.log('Data import!!!!!');
        process.exit(1)
    }catch(error){
        console.error(`Errrrrr(import) ${error}`)
        process.exit(1)

    }

}

const destroyData = async()=>{
    try{
        await Cours.deleteMany()
        await User.deleteMany()
        console.log('Data Destroyed!!!!!');
        process.exit()
    }catch(error){
        console.error(`Errrrrr(destroy) ${error}`)
        process.exit(1)

    }
}
if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData()
}