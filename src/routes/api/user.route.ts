import { Router } from "express";
import { registrationBodySchema } from "./json-schemas/user/registration.scheme";

import { Validator } from "express-json-validator-middleware";
import { UserController } from "../../controllers/api/user.controller";
import { RouteUtilities } from "../../utilities/route.utilities";

export const userApiRoute = Router();

const validate = new Validator({allErrors: true}).validate;

userApiRoute.post('/registration',
  validate({body: registrationBodySchema}),
  (req, res) => {
    UserController.registration(req.body)
      .then((user) => {
        RouteUtilities.responseHandler(user, res);
      })
      .catch((error) => RouteUtilities.errorHandler(error, res));
  });
