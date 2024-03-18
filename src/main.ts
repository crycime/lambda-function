import * as dotenv from 'dotenv';
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
import { app } from './app';

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
