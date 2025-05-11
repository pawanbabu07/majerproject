const { builtinModules}=require("module");
const mongoose =  require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title :{
        type: String,
        require: true,
    },
    description:{
        type: String,
    },
    image:{
        filename: String,
        url: String,
    },
    price:Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing; 