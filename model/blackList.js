const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema
// mongoose.connect('mongodb://localhost/places',{useNewUrlParser : true})



const blackListSchema = new Schema({
    name: String,
    language : String,
    genres: Array,
    premiered: Date,
    rating: Number,
    mediumImg: String,
    originalImag: String,
    summary: String,
    runTime: Number,
    status: String,
    id: Number,
})


const  blackList = mongoose.model("blackList", blackListSchema)

module.exports = blackList
