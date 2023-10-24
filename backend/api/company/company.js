import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import company from './routes/company.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/company', company);

app.listen(process.env.PORT, () => {
    console.log(`Servidor está rodando na porta ${process.env.PORT}`);
});

export default app;