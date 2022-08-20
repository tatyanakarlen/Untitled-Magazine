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
    tags: [], 
    image: {type: String, required: false},
    // timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    postedBy: {type: String, required: true},
    contributorId:  {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Contributor',
    }
}, 
{
    timestamps: true  
})

module.exports = mongoose.model('Article', articleSchema);



