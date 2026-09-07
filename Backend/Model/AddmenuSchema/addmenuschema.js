
const mongoose=require('mongoose');

const AddMenuSchema=new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    food_name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    
    }
     // Disables the creation of __v completely
},{ versionKey: false });

const addmenumodel=mongoose.model("addmenus",AddMenuSchema);

module.exports=addmenumodel;



