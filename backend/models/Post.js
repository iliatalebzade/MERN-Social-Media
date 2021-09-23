import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: String,
    caption: String,
    name: String,
    creator: String,
    tags: [String],
    artWork: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;