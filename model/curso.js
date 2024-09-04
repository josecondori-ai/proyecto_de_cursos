const mongoose=require('mongoose')
const CursoSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Por favor ingrese su nombre'],
        unique:true,
        trim:true,
        maxlength:[50,'el nombre no puede ser mas de 50 caracteres']


    },
    description:{
        type:String,
        required:[true,'Porfavos agrega la descripcion'],
        maxlength:[500,'no puede tener mas de 500 caracteres la descipcion']
    },
    website:{
        type:String,
        match:[/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/ ,'Por favor ingrese la utl con HTTP o HTTPS' ]
        //www.google.com  https://www.mi-pagina.com
    },
    phone:{
        type:String,
        maxlength:[20,'el numero debe tenes 20 caracteres']
    },
    email:{
        type:String,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'por favor ingrese un email valido'
        ]
    },
    address:{
        type:String,
        required:[true,'Por faovr ingrese una direccion valida']
    },
    location:{
        type:{
        type:String,
        enum:['Point'],
        required:false
        },
        coordinates:{
            type:[Number],
            required:false,
            index:'2dsphere'
        },
        formattedAddress:String,
        street:String,
        city:String,
        state:String,
        zipcode:String,
        country:String
        

    },
    careers:{
        type:[String],
        require:true,
        enum:['Web Development','Mobile Development','UI/UX','Data Science','Business','Other']

    },
    averageRating:{
        type:Number,
        min:[1,'la calificacion debe tener al menos un 1'],
        max:[10,'la calificacion maxima tiene que estar entre  10']
    },
    averageCost:{
        photo:{
            type:String,
            default:'no-photo.jpg'
        }
    }


})

module.exports=mongoose.model('Cursos',CursoSchema)