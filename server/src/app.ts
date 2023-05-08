import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
// middleware
import globalErrorHandlerMW from './middleware/errorHandler'
// controllers
import loanController from './controllers/loanApplication'
import businessController from './controllers/business'

const corsOption = {
  origin: '*',
  methods: ['GET', 'POST', 'PATCH'],
  allowedHeaders: ['Content-Type'],
};

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors(corsOption))

app.get('/health-check', async (_, res) => {
  res.status(200).send({ ok: true });
});

// routes
app.use(loanController)
app.use(businessController)

// middleware
app.use(globalErrorHandlerMW);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
