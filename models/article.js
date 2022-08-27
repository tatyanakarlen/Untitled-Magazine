const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user.js')


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
    headline: {type: String, required: true}, 
    tags: [], 
    image: {type: String, required: false},
    postedBy: {type: String, required: true},
    contributorId:  {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Contributor',
    },
    user: { 
      type: Schema.Types.ObjectId, 
       ref: 'User' 
    },
}, 
{
    timestamps: true  
})

module.exports = mongoose.model('Article', articleSchema);



