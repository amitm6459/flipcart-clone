import mongoose from "mongoose";


const userSchema = new mongoose.Schema({

    firstname: {
        type: String,
        requried: true,
        trim: true,
        min: 3,
        max: 15
    },
    lastname: {
        type: String,
        requeied: true,
        trim: true,
        min: 3,
        max: 15
    },
    username: {
        type: String,
        requried: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        requried: true,
        trim: true,
        unique: true,
        lowercase: true

    },
    password: {
        type: String,
        requried: true,
    },
    phone: {
        type: String,
        requeied: true,
 
    }

})


const user = mongoose.model('user', userSchema);
export default user;