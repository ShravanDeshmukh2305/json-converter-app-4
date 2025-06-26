import express from 'express';
import { encodeTextController, decodeTextController } from '../controllers/base64Controller.js';

const router = express.Router();

router.post('/encode', encodeTextController);
router.post('/decode', decodeTextController);

export default router;
