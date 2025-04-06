import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/emailRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(cors());
app.use(express.json());
import flowRoutes from './routes/flowRoutes';

app.use('/flow', flowRoutes);

app.use('/api/email', emailRoutes);
app.use('/api/auth', authRoutes);
export default app;

// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import emailRoutes from './routes/emailRoutes';
// import connectDB from './config/db';

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Routes
// app.use('/api', emailRoutes);

// // Connect DB
// connectDB();

// export default app;


