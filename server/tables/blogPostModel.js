import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    postID: { type: String, required: true},
    username: { type: String, required: true },
    date: { type: Date, required: true },
    content: { type: String, required: true }
});

export default mongoose.model('posts', blogPostSchema);