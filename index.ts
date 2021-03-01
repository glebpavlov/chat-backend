import express from 'express';
import { apiRoute } from "./src/routes/api/api.route";
import bodyParser from "body-parser";
import {ValidationError} from "express-json-validator-middleware";

/** порт приложения */
const port = 3000;

const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', apiRoute);

// Error handler for valication errors
app.use((err: any, req: any, res: any, next: any) => {
  if (err instanceof ValidationError) {
    // At this point you can execute your error handling code
    res.status(400).send({
      statusText: 'Bad Request',
      validations: err.validationErrors
    });
    next();
  } else next(err); // pass error on if not a validation error
});
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
