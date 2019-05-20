import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import config from '../config';
import router from './router';

const app = express();

app.use(cors());
app.use('/', router);

app.listen(config.hwsPort, () => {
    console.log(`HwsClient listening on port ${config.port}`);
});
