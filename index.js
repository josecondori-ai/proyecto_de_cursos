const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const ejs=require('ejs')
const colors=require('colors')
const cookieParser=require('cookie-parser')
const connectDB=require('./config/db')



//rutas de cursos
const cursos=require('./routes/cursos')
const auth=require('./routes/auth')

dotenv.config({path:'./config/.env'})

connectDB()


const app=express()


app.use(express.json())

//cookie parser
app.use(cookieParser())

//configurar morgan
app.use(morgan('dev'))

app.set('view engine','ejs')

//montar una ruta

app.use('/api/v1/cursos',cursos)
app.use('/api/v1/auth',auth)

app.get('/',(req,res)=>{
    // res.send('soy el home')
    res.render('index')
})
//http://localhost:4500/

//http://localhost:4500/api/v1/cursos//api/v1/cursos

//http://localhost:4500/api/v1/cursos /

// http://localhost:4500/api/v1/cursos/


const PORT=process.env.PORT || 4500

// app.listen(()=>{
//     console.log(`servidor ejecutandose ${PORT} `)
// })


app.listen(PORT,console.log(`se conecto al servidor ${PORT}`.yellow.bold))