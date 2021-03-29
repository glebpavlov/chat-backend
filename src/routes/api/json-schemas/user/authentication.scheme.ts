import { JSONSchema7 } from 'json-schema';

/**
 * схема валидации тела запроса авторизации пользователя
 */
export const authenticationBodyScheme: JSONSchema7 = {
  type: 'object',
  additionalProperties: false,
  properties: {
    recaptchaToken: {
      type: 'string',
    },
    authenticationData: {
      properties: {
        login: {
          type: 'string',
          minLength: 3,
          maxLength: 50
        },
        password: {
          type: 'string',
          minLength: 3,
          maxLength: 50,
        },
      },
      required: ['login', 'password']
    }
  },
  required: ['recaptchaToken', 'authenticationData']
}
