import mongoose from 'mongoose';
import validator from "validator";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            validate : validator.isEmail
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: 'user'
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date
    },
    {
        timestamps: true
    }

)



userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// add middleware to encrypt password 

userSchema.pre('save', async function (next){
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 10)
})


const UserModel = mongoose.model('user', userSchema)
export default UserModel;