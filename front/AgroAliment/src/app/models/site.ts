import {Service} from "./service";
import {User} from "./user";

export interface Site {
  id?: number;
  ville?: string;
  users?: Array<User>;
}
