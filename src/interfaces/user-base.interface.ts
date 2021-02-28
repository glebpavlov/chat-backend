/**
 * базовый пользователь
 */
export interface IUserBase {
    /**
     * логин для авторизации
     */
    login: string;
    /**
     * имя пользователя
     */
    firstName?: string;
    /**
     * фамилия
     */
    secondName?: string;
    /**
     * отчество
     */
    lastName?: string;
}
