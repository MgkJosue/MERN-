import mongoose from "mongoose"

const postSchema= new mongoose.Schema({
    nameRoutine:{
        type: String,
        trim:true 
    },
    timeBegin:{
        type: Number,
        trim:true
    },
    timeEnd:{
        type: Number
    },
    numberOfExercises:{
        type: Number
    },
    description:{
        type: String,
        trim:true
    }
})

export default mongoose.model('Post', postSchema)