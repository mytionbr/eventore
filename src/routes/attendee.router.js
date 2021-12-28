import express from 'express';
import { findByEvent, register, unregister } from '../controllers/attendee.constroller.js';

const router = express.Router();

router.route('/event/:event_id')
    .get( findByEvent )

router.route('/')
    .post( register )
    .delete( unregister )

export default router;