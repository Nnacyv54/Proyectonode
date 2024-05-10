const mongoose = require("mongoose");

const authTokenSchemary = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    token: {
        type:String,
        required:true,
    },
    createdAt: {
        type:Date,
        deafult:Date,now,
        expires:"1h",

    },
});

const AuthToken = mongoose.model("AuthToken, authTokenSchema")

module.exports=AuthToken