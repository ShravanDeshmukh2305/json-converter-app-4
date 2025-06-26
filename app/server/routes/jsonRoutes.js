import express from 'express';
import { formatJsonController, getHistoryController } from '../controllers/jsonController.js';

const router = express.Router();

router.post('/format-json', formatJsonController);
router.get('/history', getHistoryController);

export default router;
