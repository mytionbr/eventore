import express from 'express';
import { list, save } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/')
    .post( save )
    .get( list )

export default router;