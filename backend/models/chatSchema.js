import mongoose from 'mongoose'
import Message from './MessageModel.js'
import User from "./UserModel.js"

const chatSchema=new mongoose.Schema({
    user:       {type:[mongoose.Schema.Types.ObjectId], ref:"user"},
    content:    { type: [mongoose.Schema.Types.ObjectId], ref: "message"},
    
}, {
    timestamps: true,
    toJSON:{
        transform(doc, ret){
            delete ret.password
            delete ret.__v
        },
    },
})

userSchema.pre('remove', async function() {
    console.log("User is being removed " + this._id)
    await Message.deleteMany({ author: this._id })
})

const Chat=mongoose.model("chat", chatSchema)

export default User