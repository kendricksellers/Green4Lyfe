import mongoose from 'mongoose';

const userQuizModelSchema = new mongoose.Schema({
    username: { type: String, required: true }
    /* Unsure of all the information/questions that the test will have 
    and the format it will use, so leaving this blank for now */
});

export default mongoose.model('quizResults', userQuizModelSchema);