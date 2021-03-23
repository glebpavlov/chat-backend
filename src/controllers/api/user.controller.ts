import { IRegistrationRequest } from "chat-common";
import { UserUtilities } from "../../utilities/user.utilities";
import { UserModel } from "../../models/user.model";

export class UserController {
  static registration(registrationData: IRegistrationRequest) {
    // создаем копию данных и кодируем пароль
    const dbData = {
      ...registrationData.userData,
      password: UserUtilities.encodeDBPassword(registrationData.userData.password)
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
}
