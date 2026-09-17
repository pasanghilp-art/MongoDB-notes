const mongoose = require('mongoose');
const User = require("./user");

mongoose.connect("mongodb://localhost/usersdb");

run()
async function run(){
    try {
         const user = await User.create({ 
                name: "Pasang",
                age: 18,
                hobbies: ["Gym, drawing, Walking"],
                address: {
                    street: "Main st"
                },
                email: 'pasanghilp@gmail.com',
             })
             console.log(user)
        } catch (e) {
        console.log(e.message)
    }
}