import { Document, model, Schema } from 'mongoose';
import { IUserBase } from 'chat-common';

/**
 * интерфейс монго документа пользователя
 */
export interface IUserDocument extends Document, Omit<IUserBase, '_id'> {
}

const UserSchema = new Schema<IUserDocument>({
  login: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  firstName: {
    type: String,
    required: false
  },
  secondName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  }
});

/**
 * mongoose модель пользователя
 */
export const UserModel = model<IUserDocument>('User', UserSchema);
