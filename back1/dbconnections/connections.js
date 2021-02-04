const mongoose = require('mongoose');
const URI="mongodb+srv://tulasi:tulasi@cluster0.wo2ow.mongodb.net/<dbname>?retryWrites=true&w=majority"
// const URI = "mongodb+srv://tulasi:<password>@cluster0.wo2ow.mongodb.net/<dbname>?retryWrites=true&w=majority";

const connectDB = async() => {
await mongoose.connect(URI,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
console.log("db conne cted succesfully")
}
module.exports = connectDB;