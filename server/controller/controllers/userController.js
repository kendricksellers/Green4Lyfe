import * as dbController from '../databaseController.js';
import User from "../../tables/userModel.js";

export const create = async (req, res) => { // POST /users
    const userData = req.body;
    if (!userData) {
        return res.status(200).send({
            error: "userData not found",
        });
    }

    await dbController.create(User, userData, res).then(user => {
        cleanProfile(user);
        res.json(user);
    });
}

export const findAll = async (req, res) => { // GET /users
    await dbController.findAll(User, res).then(users => {
        for (let user of users) {
            cleanProfile(user);
        }
        res.json(users);
    });
}

export const getByUsername = async (req, res) => {
    const username = req.params.username; // GET /users/:username
    await dbController.findByQuery(User, { username: username }, res).then(user => {
        cleanProfile(user[0]);
        res.json(user[0]);
    });
}

// for sec, send in body
// {username: "ueyfyuef", password: "iubefuybe"}
export const authUser = async(req, res) => {
    const authRequest = req.body;
    await dbController.findByQuery(User, { username: authRequest.username}, res).then(users => {
        let user = users[0];
        if (user.password === authRequest.password) {
            cleanProfile(user);
            res.json(user);
        } else {
            return res.status(200).send( { error: "Incorrect username or password"} );
        }
    });
}

export const deleteUser = async (req, res) => { // DELETE /users/:username
    const username = req.params.username;
    await dbController.deleteByQuery(User, { username: username }, res);
}

export const updateUser = async (req, res) => { // UPDATE /users/:username
    const username = req.params.username;
    const data = req.body;
    await dbController.updateTable(User, {username: username }, data, res).then(user => {
        cleanProfile(user);
        res.json(user);
    });
}

const cleanProfile = (user) => {
    user.password = undefined;
    return user;
}