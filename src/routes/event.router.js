import express from 'express';
import { list } from '../controllers/event.controller.js';

const router = express.Router();

router.route('/')
    .get( list )

export default router