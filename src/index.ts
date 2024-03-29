import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import noteRoutes from './routes/noteRoutes';

const app = express();
const PORT = 7777;

// mongoose.connect('mongodb://localhost:27017/notes', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

mongoose.connect('mongodb://localhost:27017/notes', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use('/api/notes', noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

