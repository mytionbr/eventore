import express from 'express';
import { findById, findByTitle, list, save, update } from '../controllers/event.controller.js';

const router = express.Router();

router.route('/title/:title')
    .get(findByTitle)

router.route('/')
    .get( list )
    .post( save )
    .put( update )

router.route('/:event_id')
    .get(findById)



export default router