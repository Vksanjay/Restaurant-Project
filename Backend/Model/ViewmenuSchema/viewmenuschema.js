const mongoose=require('mongoose');

const viewmenuSchema=new mongoose.Schema({
title:{
    type:String,
    required:true
},
rating:{
    type:Number,
    required:true
},
price:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
}
});

const viewmenumodel=mongoose.model("viewmenu",viewmenuSchema);

module.exports=viewmenumodel;
































