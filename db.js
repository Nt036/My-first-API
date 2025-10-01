const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://trinah:mongodbdatabase@cluster0.lgnlw0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Your connection to db is successful")
    } catch (error) {
        console.log(error)
    }
}




