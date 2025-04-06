import { Agenda } from 'agenda';
import sendEmail from '../../services/emailService';

const defineEmailJob = (agenda: Agenda) => {
  agenda.define('sendEmail', async (job: import('agenda').Job) => {
    const { to, subject, text } = job.attrs.data as {
      to: string;
      subject: string;
      text: string;
    };

    await sendEmail(to, subject, text);
  });
};

export default defineEmailJob;
