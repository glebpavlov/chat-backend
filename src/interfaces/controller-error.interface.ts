/**
 * интерфейс ошибки контроллера
 */
export interface IControllerError {
  /**
   * http код ошибки
   */
  status?: number;

  /**
   * текст ошибки с описанием
   */
  message: string;
}
