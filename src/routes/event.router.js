import express from 'express';
import { isAuth } from '../controllers/auth.controller.js';
import { findById, findByTitle, list, remove, save, update } from '../controllers/event.controller.js';

const router = express.Router();

router.route('/title/:title')
    .get(findByTitle)

router.route('/')
    .get( isAuth,list )
    .post(isAuth, save )
    .put( isAuth,update )

router.route('/:event_id')
    .get(isAuth,findById)
    .delete( isAuth,remove )



export default router