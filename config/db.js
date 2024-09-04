const mongoose=require('mongoose')

const connectDB=async()=>{
    const conexion= await mongoose.connect(process.env.MONGO_URL)
    console.log('se conecto a mongo'.green.underline.bold)
}

module.exports=connectDB