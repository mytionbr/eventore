import express from 'express';
import { findById, findByName, list, save, update } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/name/:name')
    .get( findByName )

router.route('/:user_id')
    .get( findById )

router.route('/')
    .post( save )
    .get( list )
    .put( update )

export default router;