import express from 'express';
import { register, unregister } from '../controllers/attendee.constroller.js';

const router = express.Router();

router.route('/')
    .post( register )
    .delete( unregister )

export default router;