import { IAuthenticationRequest, IRegistrationRequest } from 'chat-common';
import { UserUtilities } from '../../utilities/user.utilities';
import { UserModel } from '../../models/user.model';

export class UserController {
  /**
   * контроллер регистрации
   * @param registrationRequest данные регистрации
   */
  static registration(registrationRequest: IRegistrationRequest) {
    // создаем копию данных и кодируем пароль
    const dbData = {
      ...registrationRequest.registrationData,
      password: UserUtilities.encodeDBPassword(registrationRequest.registrationData.password)
    };
    const user = new UserModel(dbData);
    return user.save()
      .then((newUser) => {
        // чистим юзера от пароля и прочих данных
        return UserUtilities.clearUserData(newUser);
      })
      .catch((error) => {
        // ошибка не уникального значения
        if (error.code === 11000) {
          throw {message: 'duplicate error', status: 409};
        }
        // если мы не знаем ошибку - шлем дальше оригинал
        throw error;
      })
  }

  /**
   * контроллер авторизации
   * @param authenticationRequest данные авторизации
   */
  static authentication(authenticationRequest: IAuthenticationRequest) {
    return UserModel.findOne({
      login: authenticationRequest.authenticationData.login,
      password: UserUtilities.encodeDBPassword(authenticationRequest.authenticationData.password)
    })
      .then((userDocument) => {
        if (userDocument) {
          return {
            user: UserUtilities.clearUserData(userDocument),
            token: UserUtilities.generateJwt(userDocument)
          }
          // если нет документа, значит данные авторизации неправильные
        } else {
          throw {message: 'user or password not found', status: 401};
        }
      });

  }
}
