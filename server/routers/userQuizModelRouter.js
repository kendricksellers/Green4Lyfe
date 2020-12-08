import * as userQuizController from '../controller/controllers/userQuizController.js';
import express from 'express';
const userQuizRouter = express.Router();

// /api/quizzes
userQuizRouter.post('/', userQuizController.create);
userQuizRouter.post('/results', userQuizController.getLifestyle);
userQuizRouter.get('/:username', userQuizController.getUserQuiz);
userQuizRouter.get('/:username/lifestyle', userQuizController.getUserLifestyle)
userQuizRouter.put('/:username', userQuizController.updateUserQuiz);

export default userQuizRouter;