const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    startdate:{
        type: String,
        required: true
    },
    enddate:{
        type: String,
        required: true
    },
    priority:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
});

const users = new mongoose.model("users",userSchema);


module.exports = users;