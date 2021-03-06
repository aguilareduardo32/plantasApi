import mongoose from 'mongoose';
export default mongoose.model('Trolley', new mongoose.Schema({
    user: { type : mongoose.Schema.ObjectId, 
        ref: "User",
        required: true,
        unique: true
    },
    plants: [ 
        {
            type : mongoose.Schema.ObjectId,
            ref : 'Plant',
        }
    ] 
}))
