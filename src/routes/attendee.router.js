import express from 'express';
import { findByEvent, register, unregister } from '../controllers/attendee.constroller.js';
import { hasAuthorization, isAuth } from '../controllers/auth.controller.js';

const router = express.Router();

router.route('/event/:event_id')
    .get( isAuth,findByEvent )

router.route('/')
    .post( isAuth,hasAuthorization,register )
    .delete( isAuth,hasAuthorization,unregister )

export default router;