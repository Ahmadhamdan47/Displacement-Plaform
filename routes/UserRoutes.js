import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

// GET all users
router.get('/', userController.getAllUsers);

// GET a single user by ID
router.get('/:id', userController.getUserById);

// POST a new user
router.post('/', userController.createUser);

// PUT to update a user by ID
router.put('/:id', userController.updateUser);

// DELETE a user by ID
router.delete('/:id', userController.deleteUser);

export default router;
