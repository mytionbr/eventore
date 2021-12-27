import express from 'express';
import { save } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/')
    .post( save )
export default router;