import {User} from "./user";
import {Site} from "./site";

export interface Service{
  id?: number;
  nom?: string;
  siteId?: number;
  site?: Site;
  users?: Array<User>;
}
