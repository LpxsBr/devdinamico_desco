import express, { json } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express();

app.use(json());
app.use(cors());

app.get('/', (req, res)=>res.sendFile(path.join(__dirname+'/src/public/index.html')));

app.listen(9000, ()=>console.log('9000'));
