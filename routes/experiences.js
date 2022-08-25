import express from 'express';

import { getExperiences } from '../controllers/experiences.js'

const router = express.Router();

// localhost:5003/experiences
router.get('/', getExperiences); // Grade all the tests from DB for the testID

export default router;