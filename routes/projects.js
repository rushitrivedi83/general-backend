import express from 'express';

import { getProjects } from '../controllers/projects.js'

const router = express.Router();

// localhost:5003/projects
router.get('/', getProjects); // Grade all the tests from DB for the testID

export default router;