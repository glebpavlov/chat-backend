import { JSONSchema7 } from 'json-schema';

/**
 * схема валидации тела запроса регистрации пользователя
 */
export const registrationBodyScheme: JSONSchema7 = {
  type: 'object',
  additionalProperties: false,
  properties: {
    recaptchaToken: {
      type: 'string',
    },
    registrationData: {
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
          maxLength: 50,
        },
        email: {
          type: 'string',
          minLength: 3,
          maxLength: 50,
          pattern: '^[^@]+@[^@]+\\.[^@]+$'
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
  required: ['recaptchaToken', 'registrationData']
}
