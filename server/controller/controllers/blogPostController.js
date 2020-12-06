import * as dbController from '../databaseController.js';
import BlogPost from "../../tables/blogPostModel.js";

export const create = async (req, res) => {
    const postData = req.body;
    if (!postData) {
        return res.status(200).send( { error: "postData not found"});
    }

    await dbController.create(BlogPost, postData, res).then(post => {
        res.status(200).send({ success: "Post was added for the user"});
    });
}

export const getPost = async (req, res) => {
    const username = req.params.username;
    const postID = req.params.postID;
    await dbController.findByQuery(BlogPost, { username: username, postID: postID }, res).then(posts => {
        res.json(posts[0]);
    });
}

export const getAllPostsByUsername = async (req, res) => {
    const username = req.params.username;
    await dbController.findByQuery(BlogPost, { username: username }, res).then(posts => {
        res.json(posts);
    });
}

export const getAllPosts = async (req, res) => {
    await dbController.findAll(BlogPost, res).then(posts => {
        res.json(posts);
    });
}

export const updatePost = async (req, res) => {
    const username = req.params.username;
    const postID = req.params.postID;
    const data = req.body;
    await dbController.updateTable(BlogPost, { username: username, postID: postID}, data, res).then(post => {
        res.json(post);
    })
}

export const deletePost = async (req, res) => {
    const username = req.params.username;
    const postID = req.params.postID;
    await dbController.deleteByQuery(BlogPost, { username: username, postID: postID }, res);
}