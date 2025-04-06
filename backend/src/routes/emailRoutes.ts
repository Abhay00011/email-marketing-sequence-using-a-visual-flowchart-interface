import express from 'express';
import { getSavedFlows, scheduleEmail } from '../controllers/emailController';
import validateRequest from '../utils/validateRequest';
import { authMiddleware } from '../utils/authMiddleware';

const router = express.Router();

router.post('/schedule',authMiddleware, validateRequest, scheduleEmail);
// router.post('/schedule', validateRequest, scheduleEmail);
router.get('/flows', authMiddleware, getSavedFlows);

export default router;
