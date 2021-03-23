import md5 from "md5";
import { userConfig } from "../configs/user.config";
import { IUserBase } from "../../../chat-common";
import { IUserDocument } from "../models/user.model";
import { omit } from 'lodash'

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
}
