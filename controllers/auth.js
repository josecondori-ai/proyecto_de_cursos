const Usuario=require('../model/Usuarios')



//@desc   MOSTRAR Registrar Usuarios Nuevos
//@route  GET /api/v1/auth/register
//@access Publico


// exports.getRegistrar=async(req,res,next)=>{
//     try{
//         //res.render(register)
//         res.status(200).json({resultado:true,mensaje:'muestro la pagina de registro',datos:cursos})            
//     }catch(error){
//         res.status(400).json({mensaje:'no funciono'})

//     }
// }




//@desc   ENVIAR Registrar Usuarios Nuevos
//@route  POST /api/v1/auth/register
//@access Publico

exports.postRegistrar=async(req,res,next)=>{
    try{

        const {name,email,password,role}=req.body
            const user=await Usuario.create({
                name,email,password,role
            })
            
            const token=user.getSignedJwtToken()
       
        //res.render(register)
        res.status(200).json({resultado:true,mensaje:'los datos se enviaron  registro',datos:user,token})            
    }catch(error){
        console.log(error)
        res.status(400).json({mensaje:'no funciono'})

    }
}



//@desc   MOSTRAR login Usuario
//@route  GET /api/v1/auth/login
//@access Publico


// exports.getLogin=async(req,res,next)=>{
//     try{
//         //res.render(login)

//         res.status(200).json({resultado:true,mensaje:'muestro la pagina de login',datos:cursos})            
//     }catch(error){
//         res.status(400).json({mensaje:'no funciono'})

//     }
// }


//@desc   ENVIAR login Usuario
//@route  POST /api/v1/auth/login
//@access Publico

exports.postLogin=async(req,res,next)=>{
    try{

        const {email,password}=req.body

        //validar el email y el password
        if(!email || !password){
            return console.log('error ingrese contraseña y password')
        }

        //chequo el dato del usuario
        const user=await Usuario.findOne({email}).select('+password')

        if(!user){
            return console.log('no esta registrado')
        }
        //cheaueo los password
        
        
        
        //ANALIZAR CODIGO!!
        //   const sonIguales=await Usuario.matchPassword(password)

        //   if(!sonIguales){
        //     return console.log('la ocntraseña no es igual')
        // }
            
            const token=user.getSignedJwtToken()
       
        //res.render(register)
        res.status(200).json({resultado:true,mensaje:'los datos se enviaron  registro',datos:user,token})            
    }catch(error){
        console.log(error)
        res.status(400).json({mensaje:'no funciono'})

    }
}

const sendTokenResponse=(Usuario,statusCode,res)=>{
    //creo un token
    const token=Usuario.getSignedJwtToken()

    const options={
        expires:new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000)// 18/9/2024  => 30 dias =>1dias => esto finaliza 
    }
}