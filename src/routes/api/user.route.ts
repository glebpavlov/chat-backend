import { Router } from 'express';
import { registrationBodyScheme } from './json-schemas/user/registration.scheme';
import { Validator } from 'express-json-validator-middleware';
import { UserController } from '../../controllers/api/user.controller';
import { RouteUtilities } from '../../utilities/route.utilities';
import { authenticationBodyScheme } from './json-schemas/user/authentication.scheme';
import { IUserBase } from '../../../../chat-common';

export const userApiRoute = Router();

const validate = new Validator({allErrors: true}).validate;

userApiRoute.post('/registration',
  validate({body: registrationBodyScheme}),
  (req, res) => {
    UserController.registration(req.body)
      .then((result) => {
        RouteUtilities.responseHandler(result, res);
      })
      .catch((error) => RouteUtilities.errorHandler(error, res));
  });

userApiRoute.post('/authentication',
  validate({body: authenticationBodyScheme}),
  (req, res) => {
    UserController.authentication(req.body).then((result: { token: string, user: IUserBase }) => {
      RouteUtilities.responseHandler(result, res);
    })
      .catch((error) => RouteUtilities.errorHandler(error, res));
  });
