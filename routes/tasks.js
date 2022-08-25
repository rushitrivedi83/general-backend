import express from 'express';

import {getTasks, addTask, updateTask, deleteTask} from '../controllers/tasks.js'

const router = express.Router();

// localhost:5003/user/tasks

router.get('/:uid', getTasks);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;