import express from 'express';
import { hasAuthorization, isAuth } from '../controllers/auth.controller.js';
import { findById, findByTitle, list, remove, save, update } from '../controllers/event.controller.js';

const router = express.Router();

router.route('/title/:title')
    .get(isAuth, findByTitle)

router.route('/')
    .get( isAuth,list )
    .post(isAuth,hasAuthorization, save )
    .put( isAuth,hasAuthorization,update )
    .delete( isAuth,hasAuthorization,remove )

router.route('/:event_id')
    .get(isAuth,findById)
    


export default router