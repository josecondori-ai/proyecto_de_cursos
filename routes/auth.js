const express=require('express')
const {postRegistrar,postLogin}=require('../controllers/auth')
const router=express.Router()


// router.route('/register').get('getRegistrar').post(postRegistrar)

router.post('/register',postRegistrar)
router.post('/login',postLogin)





module.exports=router


//http://localhost:4500/api/v1/auth/register  ??