const Cursos=require('../model/curso')



//@desc   Obtenemos todos los cursos
//@route  GET /api/v1/cursos
//@access Publico


exports.getCursos=async(req,res,next)=>{
try{
    
   let cursos= await Cursos.find()
   res.status(200).json({resultado:true,mensaje:'VER  cursos',datos:cursos})
}catch(error){
    
    res.status(400).json({mensaje:'no funciono'})
}


}


//@desc   Crear un curso
//@route  POST /api/v1/cursos
//@access Privado


exports.postCurso=async(req,res,next)=>{

   
    try{
        const cursos = await Cursos.create(req.body)

        res.status(200).json({resultado:true,mensaje:'creaste un  curso',datos:cursos})
    }catch(error){
        res.status(400).json({mensaje:'no funciono'})
    }

    


}
//@desc   actualizamos un  curso
//@route  PUT /api/v1/cursos/:id
//@access Private


exports.updateCurso=async(req,res,next)=>{
    try{
      const cursos=  await Cursos.findByIdAndUpdate(req.params.id,req.body)
      res.status(200).json({resultado:true,mensaje:'creaste un  curso',datos:cursos})


    }catch(error){
        res.status(400).json({mensaje:'no funciono'})

    }


}
//@desc   Eliminar un curso
//@route  GET /api/v1/cursos/:id
//@access Private


exports.eliminarCurso=async(req,res,next)=>{
    try{
        const cursos = await Cursos.findByIdAndDelete(req.params.id)

        res.status(200).json({resultado:true,mensaje:'creaste un  curso',datos:cursos})
    }catch(error){
        res.status(400).json({mensaje:'no funciono'})
    }

}
//@desc   Obtener un curso
//@route  GET /api/v1/cursos/:id
//@access Publico


exports.getCurso=async(req,res,next)=>{
try{
   let cursos= await Cursos.findById(req.params.id)
   res.status(200).json({resultado:true,mensaje:'creaste un  curso',datos:cursos})

}catch(error){
    res.status(400).json({mensaje:'no funciono'})


}
  

}



