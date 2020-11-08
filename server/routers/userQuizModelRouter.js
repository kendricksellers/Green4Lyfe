import * as userQuizController from '../controller/controllers/userQuizController.js';
import express from 'express';
const userQuizRouter = express.Router();

// /api/quizzes
userQuizRouter.post('/', userQuizController.create);
userQuizRouter.get('/:username', userQuizController.getUserQuiz);
userQuizRouter.put('/:username', userQuizController.updateUserQuiz);

export default userQuizRouter;