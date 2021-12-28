import express from 'express';
import { findByEvent, register, unregister } from '../controllers/attendee.constroller.js';
import { isAuth } from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/event/:event_id')
    .get( isAuth,findByEvent )

router.route('/')
    .post( isAuth,register )
    .delete( isAuth,unregister )

export default router;