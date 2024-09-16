const Usuario=require('../model/Usuarios')
//@desc   MOSTRAR Registrar Usuarios Nuevos
//@route  GET /api/v1/auth/register
//@access Publico
exports.getRegistrar=async(req,res,next)=>{
    try{
        //res.render(register)
        res.status(200).json({resultado:true,mensaje:'muestro la pagina de registro',datos:cursos})            
    }catch(error){
        res.status(400).json({mensaje:'no funciono'})

    }
}

//@desc   ENVIAR Registrar Usuarios Nuevos
//@route  POST /api/v1/auth/register
//@access Publico

exports.postRegistrar=async(req,res,next)=>{
    try{

        const {name,email,password,role}=req.body
            const user=await Usuario.create({
                name,email,password,role
            })
       
        //res.render(register)
        res.status(200).json({resultado:true,mensaje:'los datos se enviaron  registro',datos:cursos})            
    }catch(error){
        res.status(400).json({mensaje:'no funciono'})

    }
}