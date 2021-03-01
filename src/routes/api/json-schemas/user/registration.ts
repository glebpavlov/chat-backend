import { JSONSchema7 } from "json-schema";

/**
 * схема валидации запроса регистрации пользователя
 */
export const registrationBodySchema: JSONSchema7 = {
  type: 'object',
  additionalProperties: false,
  properties: {
    recaptchaToken: {
      type: 'string',
    },
    userData: {
      type: 'object',
      properties: {
        login: {
          type: 'string',
          minLength: 3,
          maxLength: 50
        },
        password: {
          type: 'string',
          minLength: 3,
          maxLength: 50
        },
        firstName: {
          type: 'string',
          minLength: 3,
          maxLength: 50
        },
        secondName: {
          type: 'string',
          minLength: 3,
          maxLength: 50
        },
        lastName: {
          type: 'string',
          minLength: 3,
          maxLength: 50
        }
      },
      required: ['login', 'password'],
      additionalProperties: false
    }
  },
  required: ['recaptchaToken']
}
