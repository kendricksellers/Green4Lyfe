import * as dbController from '../databaseController.js';
import User from "../../tables/userModel.js";

export const create = async (req, res) => { // POST /users
    const userData = req.body;
    if (!userData) {
        return res.status(200).send({
            error: "userData not found",
        });
    }

    await dbController.create(User, userData, res);
}

export const findAll = async (req, res) => { // GET /users
    await dbController.findAll(User, res);
}

export const getByUsername = async (req, res) => {
    const username = req.params.username; // GET /users/:username
    await dbController.findByQuery(User, { username: username }, res);
}

export const deleteUser = async (req, res) => { // DELETE /users/:username
    const username = req.params.username;
    await dbController.deleteByQuery(User, { username: username }, res);
}

export const updateUser = async (req, res) => { // UPDATE /users/:username
    const username = req.params.username;
    const data = req.body;
    await dbController.updateTable(User, {username: username }, data, res);
}