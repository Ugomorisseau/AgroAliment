import {User} from "./user";

export interface Role {
  id?: number;
  nom?: string;
  users?: Array<User>;
}
