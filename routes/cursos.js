
const express=require('express')

const { getCurso,getCursos,eliminarCurso,updateCurso,postCurso }=require('../controllers/cursos')

const router=express.Router()

router.route('/').get(getCursos).post(postCurso)
router.route('/:id').get(getCurso).put(updateCurso).delete(eliminarCurso)

module.exports=router