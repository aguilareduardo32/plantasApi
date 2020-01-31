import mongoose from 'mongoose'
export default mongoose.model('Plant', new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    specie: {
        type: String,
        required: true,
        enum: ['luz','sombra','ambas']
    },
    lightQuantity:{
        type: String,
        required: false,
        enum: ['constante','media','no necesaria']

    },
    water: {
        type: String,
        required: true,
        enum: ['unaVezAlaSemana','dosVecesALaSemana','diario']
     },
    size: {
        type: String,
        required: true,
        enum: ['pequeña','mediana','grande']
    },
    stock: {
        type: Number,
        required: false,
        default: 0,
        min: 0, 
    },   
    image:{
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    }
    
}))


    