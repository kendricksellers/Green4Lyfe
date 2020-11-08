import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    postID: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    date: { type: Date, default: Date.now() },
    title: { type: String, required: true },
    content: { type: String, required: true }
});

export default mongoose.model('posts', blogPostSchema);
