import express from 'express';
import eventRoute from './routes/event.router.js'
import userRoute from './routes/user.router.js'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// routes
app.use('/api/events', eventRoute);
app.use('/api/users', userRoute);

export default app;
