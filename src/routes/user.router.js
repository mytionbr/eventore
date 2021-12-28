import express from 'express';
import { findById, findByName, findEventsRegistered, findMyOwnEvents, list, save, update } from '../controllers/user.controller.js';
import { isAuth } from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/name/:name')
    .get( isAuth,findByName )

router.route('/:user_id/events/own')
    .get( isAuth,findMyOwnEvents )

router.route('/:user_id/events/registered')
    .get( isAuth,findEventsRegistered )

router.route('/:user_id')
    .get( isAuth,findById )

router.route('/')
    .post( save )
    .get( isAuth,list )
    .put( isAuth,update )

export default router;