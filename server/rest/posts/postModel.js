var mongoose = require('mongoose');

var postsSchema = new mongoose.Schema({
    dateCreated : {type:Number, default:Date.now},
    lastUpdated : {type:Number, default:Date.now},
    status : {type:String, default:"published"}, // [published,draft]
    content : {type:String, default:"No content"},
    user : {
        UId : {type:String, default:"123"},
        name : {type:String, default:"test"}
        //  propic : String
    },
    active: {type:Boolean,default:true},     //admin right
    favorite : [{
        LikerId : String,
        LikerName : String,
        Likerpropic : String
    }]
});

module.exports = mongoose.model("posts",postsSchema);