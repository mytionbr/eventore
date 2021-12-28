import express from 'express';
import { list, save, update } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/')
    .post( save )
    .get( list )
    .put( update )

export default router;