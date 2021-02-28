import { Document, Model, model, Types, Schema, Query } from "mongoose";
import { IUserBase } from "../interfaces/user-base.interface";

interface UserDocument extends Document, IUserBase {}

const UserSchema = new Schema<UserDocument>({
    login: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: false
    },
    secondName: {
        type: String,
    }
})

const User = model<UserDocument>('User', UserSchema);
export default User;
