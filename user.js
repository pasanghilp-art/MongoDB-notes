const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
        street: {
            type: String,
            maxLength: 200},
        city: String,
})
const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate: {
            validator: v=> v % 2 ===0,
            message: props => `${props.value} iss not an even number`,
        },
    },
    email: {
        type: String,
        minLength: 10,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: ()=> Date.now(),
    },

    updatedAt: {
       type: String,
        default: ()=> Date.now(),
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
})
module.exports = mongoose.model("User", userSchema)