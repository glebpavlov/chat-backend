import { IControllerError } from "../interfaces/controller-error.interface";
import { Response } from "express";

export namespace RouteUtilities {
  /**
   *
   * @param error ошибка контроллера или оригинальная ошибка
   * @param response
   */
  export const errorHandler = (error: IControllerError, response: Response) => {
    response.status(error?.status || 400).send({data: null, error: (error?.message || error || 'Unknown error')})
  }
  /**
   *
   * @param data успешный ответ от контроллера
   * @param response
   */
  export const responseHandler = (data: unknown, response: Response) => {
    response.status(200).send({data, error: null})
  }
}
