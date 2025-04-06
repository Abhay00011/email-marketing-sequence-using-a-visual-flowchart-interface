import { Request, Response } from 'express';
import agenda from '../agenda/agendaInstance';
import Job from '../models/Job';

export const getSavedFlows = async (req: Request, res: Response) => {
    try {
      const flows = await Job.find({}); // optionally filter by user
      res.json(flows);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch flows' });
    }
  };

export const scheduleEmail = async (req: Request, res: Response) => {
  try {
    const { to, subject, text } = req.body;

    const sendTime = new Date(Date.now() + 60 * 60 * 1000); // 1 hour later

    await agenda.schedule(sendTime, 'sendEmail', { to, subject, text });

    res.status(200).json({ message: 'Email scheduled successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error scheduling email', error: err });
  }
};
