import mongoose from 'mongoose';

const userQuizModelSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    answers: [
        {
            questionID: { type: Number, required: true },
            answer: { type: String, required: true },
            modifiers: [
                {
                    category: { type: String, required: true },
                    value: { type: Number, required: true }
                }
            ]
        }
    ],
    lifestyle: [
        {
            category: { type: String },
            score: { type: Number }
        }
    ]
});

export default mongoose.model('quizResults', userQuizModelSchema);