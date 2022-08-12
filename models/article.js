const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const articleSchema = new Schema({
    title: {
        type: String, 
        required: true
    }, 
    contributor: {
        type: String, 
        required: true
    }, 
    body: {type: String, required: true}, 
    tags: {type: String, required: true}, 
    postedBy: {type: String, required: true},
    contributorId:  {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Contributor',
    }
})

module.exports = mongoose.model('Article', articleSchema);



