import { Router } from "express";
import { registrationBodySchema } from "./json-schemas/user/registration";

import { Validator } from "express-json-validator-middleware";

export const userApiRoute = Router();

const validate = new Validator({allErrors: true}).validate;

userApiRoute.post('/registration',
  validate({body: registrationBodySchema}),
  (req, res) => {
    console.log('ffff');
    res.send('HELLO WORLD');
});
