import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { converterRouter } from './router/ConverterRouter';
import { currencyRouter } from './router/CurrencyRouter';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
    console.log(`Server is running on port ${process.env.PORT || 3003}`);
});

app.use('/convert', converterRouter);
app.use('/currency', currencyRouter)

app.use((req, res) => {
    res.status(404).send('Route not found');
  });