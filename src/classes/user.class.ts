import { IUserRegistration } from 'chat-common';

// ВРЕМЕННО НЕ ИСПОЛЬЗУЕТСЯ
export class User implements IUserRegistration {
  email!: string;
  firstName!: string;
  lastName!: string;
  login!: string;
  password!: string;
  secondName!: string;

  // tslint:disable-next-line:no-empty
  constructor() {
  }

}
