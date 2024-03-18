import express from 'express';
import { FeedCacheService, authHappinServer } from 'layer';

const app = express();

app.get('/', async (req, res) => {
  const feedCacheService = new FeedCacheService();
  await feedCacheService.connect(process.env.MONGODB_SERVICE_URL);
  const box = await feedCacheService.getBox('6408ba8ec8b0c08714644071');
  res.send(box);
});

app.get('/auth', authHappinServer(process.env.JWT_SECRET), async (req, res) => {
  const feedCacheService = new FeedCacheService();
  await feedCacheService.connect(process.env.MONGODB_SERVICE_URL);
  const box = await feedCacheService.getBox('6408ba8ec8b0c08714644071');
  res.send(box);
});

export { app };
