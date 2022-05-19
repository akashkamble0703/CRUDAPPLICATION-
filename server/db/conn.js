const mongoose = require("mongoose")

// MongoDB database link to Atlas
const DB = "mongodb+srv://Akashkamble:Akash12@cluster0.mtvul.mongodb.net/mernstack?retryWrites=true&w=majority"


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));