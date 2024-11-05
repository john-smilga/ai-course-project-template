import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../client/dist')));

app.get('/', (req: Request, res: Response) => {
  res.send('<h1>Hello from Server</h1>');
});

// app.get('/', (req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
// });

app.get('/api', async (req: Request, res: Response) => {
  res.json({ message: 'Hello from API' });
});

const PORT = process.env.PORT || 3000;
async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(
        `Server is running on port ${PORT} at http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();
