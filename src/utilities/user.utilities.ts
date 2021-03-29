import md5 from 'md5';
import { userConfig } from '../configs/user.config';
import { IUserBase } from '../../../chat-common';
import { IUserDocument } from '../models/user.model';
import { omit } from 'lodash';
import * as jwt from 'jsonwebtoken';

/**
 * утилиты для работы с пользователями
 */
export namespace UserUtilities {
  /**
   * солит и кодирует в MD5 пароль пользователя
   * @param userPassword оригинальный пароль пользователя
   * @return солёный md5 пароль
   */
  export const encodeDBPassword = (userPassword: string): string => {
    return md5(`${userConfig.passwordSalt}_${userPassword}_${userConfig.passwordSalt}`)
  }

  export const clearUserData = (userDocument: IUserDocument): IUserBase => {
    return omit({...userDocument.toJSON()}, ['password', '__v']) as IUserBase;
  }

  /**
   * генерирует jwt токен
   * @param userDocument mongo документ пользователя
   */
  export const generateJwt = (userDocument: IUserDocument): string => {
    const data = {
      _id: userDocument._id,
      name: userDocument.login
    };
    return jwt.sign({data,}, userConfig.jwtSecret, {expiresIn: userConfig.sessionExpires});
  }

  /**
   * декодируем jwt токен
   * @param token
   */
  export const decodeJwt = (token: string) => {
    try {
      return jwt.verify(token, userConfig.jwtSecret);
    } catch (e) {
      return null;
    }

  }
}
