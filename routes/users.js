import express from 'express';

import { registerUser, loginUser, user, isValidUser, logout } from '../controllers/users.js'

const router = express.Router();

// localhost:5003/users
router.post('/register', registerUser); // Grade all the tests from DB for the testID
router.post('/login', loginUser);
router.get('/user', isValidUser, user)
router.get('/logout', logout);

export default router;