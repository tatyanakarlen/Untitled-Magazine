const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const articleSchema = new Schema({
    title: {
        type: String, 
        required: true
    }, 
    contributor: {
        type: Schema.Types.String,
        required: true,
        ref: 'Contributor',
    }, 
    body: {type: String, required: true}, 
    tags: {type: String, required: true}, 
    postedBy: {type: String, required: true},
})

module.exports = mongoose.model('Article', articleSchema);



