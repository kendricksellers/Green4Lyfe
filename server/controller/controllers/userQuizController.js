import * as dbController from '../databaseController.js';
import UserQuiz from "../../tables/userQuizModel.js";

export const create = async (req, res) => {
    const quiz = req.body;
    if(!quiz) {
        return res.status(200).send({ error: "Quiz answers not found"});
    }

    quiz["lifestyle"] = calculateLifestyle(quiz);

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

export const getUserLifestyle = async (req, res) => {
    const username = req.params.username;
    await dbController.findByQuery(UserQuiz, {username: username}, res).then(quizzes => {
        let quiz = quizzes[0];
        if (quiz["lifestyle"]) {
            res.json(quiz.lifestyle);
        } else {
            res.status(200).send({ error: "No lifestyle calculated for the user!"});
        }
    })
}

export const updateUserQuiz = async (req, res) => {
    const username = req.params.username;
    const data = req.body;
    data["lifestyle"] = calculateLifestyle(data);
    await dbController.updateTable(UserQuiz, { username: username }, data, res).then(quiz => {
        res.status(200).send( { success: "Quiz successfully updated"});
    })
}

function calculateLifestyle(quiz) {
    let answers = quiz.answers;
    let lifestyleObj = {};
    for (let answer of answers) {
        let modifiers = answer.modifiers;
        if (modifiers) {
            for (let modifier of modifiers) {
                let cat = modifier.category;
                if (lifestyleObj[cat]) {
                    lifestyleObj[cat] += Number.parseInt(modifier.value);
                } else {
                    lifestyleObj[cat] = Number.parseInt(modifier.value);
                }
            }
        }
    }

    let lifestyle = [];
    for (let key in lifestyleObj) {
        lifestyle.push({ category: key, score: lifestyleObj[key] });
    }
    return lifestyle;
}