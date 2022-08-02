import express from 'express';
import { mainPage, aboutUs, trips, testimonials, tripDetail } from '../controllers/pageControllers.js';

const router = express.Router();

router.get('/', mainPage )

router.get('/aboutus', aboutUs)

router.get('/trips', trips)

router.get('/testimonials', testimonials)

router.get('/:slug', tripDetail)

export default router;