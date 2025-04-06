import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';
import { initAgenda } from './agenda/agendaConfig';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  await initAgenda();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
