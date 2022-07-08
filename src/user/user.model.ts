import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
  _id: string;
  email: string;
  password: string;
  isAdmin: boolean;

  favorites?: [];
}
