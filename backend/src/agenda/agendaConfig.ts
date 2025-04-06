import agenda from './agendaInstance';
import defineEmailJob from './jobDefinitions/emailJob';

export const initAgenda = async () => {
  defineEmailJob(agenda);

  await agenda.start();
  console.log('Agenda started...');
};
