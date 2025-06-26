const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
    },
    ingredients:{
        type:Array,
    },
    skin_type:{
        type:Array,
    },
    image:{
        type:String,
        required:true,
    },
    reviews: [
        {
        type: Schema.Types.ObjectId,
        ref:"Review",
    },
    ],
})

const Product=mongoose.model("Product",productSchema);
module.exports=Product;