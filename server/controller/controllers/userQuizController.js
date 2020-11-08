import * as dbController from '../databaseController.js';
import UserQuiz from "../../tables/userQuizModel.js";

export const create = async (req, res) => {
    const quiz = req.body;
    if(!quiz) {
        return res.status(200).send({ error: "Quiz answers not found"});
    }

    await dbController.create(UserQuiz, quiz, res).then(quiz => {
        res.status(200).send( { success: "Quiz was added for user"});
    })
}

export const getUserQuiz = async (req, res) => {
    const username = req.params.username;
    await dbController.findByQuery(UserQuiz, { username: username }, res).then(quizzes => {
        let quiz = quizzes[0];
        res.json(quiz);
    })
}

export const updateUserQuiz = async (req, res) => {
    const username = req.params.username;
    const data = req.body;
    await dbController.updateTable(UserQuiz, { username: username }, data, res).then(quiz => {
        res.status(200).send( { success: "Quiz successfully updated"});
    })
}