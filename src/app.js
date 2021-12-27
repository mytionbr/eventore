import express from 'express';
import eventRoute from './routes/event.route.js'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/events', eventRoute)

export default app;
