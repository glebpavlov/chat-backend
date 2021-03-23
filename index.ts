import express from 'express';
import { apiRoute } from "./src/routes/api/api.route";
import bodyParser from "body-parser";
import { ValidationError } from "express-json-validator-middleware";

import mongoose from 'mongoose';

/** порт приложения */
const port = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', apiRoute);

// Error handler for valication errors
app.use((err: any, req: any, res: any, next: any) => {
  if (err instanceof ValidationError) {
    // At this point you can execute your error handling code
    res.status(400).send({
      data: null,
      error: {
        message: 'Validation error',
        validations: err.validationErrors
      },
  });
    next();
  } else next(err); // pass error on if not a validation error
});

mongoose.connect('mongodb://localhost:27017/chat', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
});


