

const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost/shop");
const userSchema= new mongoose.Schema({
    id: Number,
    name: String,
    price: Number
});
const user= mongoose.model("user", userSchema);
user.create({
    id: 123,
    name: "Xiaomi",
    price: 50000
});