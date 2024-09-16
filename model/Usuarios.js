const mongoose=require('mongoose')
const UsuariosSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'por favor ingrese el nombre']
    },
    email:{
        type:String,
        required:[true,'ingrese un email'],
        unique:true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'por favor ingrese un email valido'
        ]
    },
    role:{
        type:String,
        enum:['user','puplisher'],
        default:'user'
    },
    password:{
        type:String,
        required:[true,'por favor ingres su password'],
        minlength:6,
        select:false
    },
    resetPasswordToken:String,
    resetPasswordExpired:Date,
    createdAt:{
        type:Date,
        default:Date.now
    }

})



//encriptamos la contraseña

UsuariosSchema.pre('save',async function(){
    
    const salt=await bcrypt.genSalt(10)
    // 123 =>
    this.password=await bcrypt.hash(this.password,salt)

    //password= await bcrypt.hash(password,10)
})



module.exports=mongoose.model('Usuario',UsuariosSchema)