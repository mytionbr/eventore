import express from 'express';
import eventRoute from './routes/event.router.js'
import userRoute from './routes/user.router.js'
import attendeeRoute from './routes/attendee.router.js'
import authRoute from './routes/auth.router.js'
import cors from 'cors'
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// routes
app.use('/api/events', eventRoute);
app.use('/api/users', userRoute);
app.use('/api/attendees', attendeeRoute);
app.use('/api/auth', authRoute)

const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
);

export default app;
