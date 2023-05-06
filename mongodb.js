const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("Failed to connect");
})


const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    passward:{
        type:String,
        required:true
    }
})


const collection=new mongoose.model('collection1',LogInSchema)
module.exports=collection

