import * as userController from '../controller/controllers/userController.js'
import express from 'express';
const userRouter = express.Router();

// /api/users
userRouter.post('/', userController.create);
userRouter.get('/', userController.findAll);
userRouter.get('/login', userController.authUser);
userRouter.get('/:username', userController.getByUsername);
userRouter.delete('/:username', userController.deleteUser);
userRouter.put('/:username', userController.updateUser);

export default userRouter;