import express from 'express';
import { findById, list, save } from '../controllers/event.controller.js';

const router = express.Router();

router.route('/')
    .get( list )
    .post( save )

router.route('/:event_id')
    .get(findById)


export default router