import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';

const PORT = 5000;
const DB_URL = 'mongodb://localhost:27017/expressPosts?directConnection=true';

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));//also a middleware
app.use('/api', router);


async function startApp() {
  try {
    app.listen(PORT, () => console.log(`Server was started on port ${PORT}`));
    await mongoose.connect(DB_URL);
  } catch (e) {
    console.log(e);
  }
}

startApp();

