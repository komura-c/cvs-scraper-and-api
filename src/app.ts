import cron from 'node-cron';
import { scraper } from './script/scraper';
import { server } from './server/server';

const scheduler = (): void => {
  console.info('Start Scheduler');
  cron.schedule(
    '0 0 6 * * 2',
    () => {
      void scraper();
    },
    {
      scheduled: true,
      timezone: 'Asia/Tokyo',
    }
  );
};
scheduler();

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.info('Start API server');
  console.info(`Listening on port ${port}...`);
});
