import {Service} from "./service";
import {Site} from "./site";
import {Role} from "./role";

export interface User {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  phone?: string;
  phonefix?: string;
  isAdmin?: boolean;
  password?: string;
  serviceId?: number;
  siteId?: number;
  roleId?: number;
  service?: Service;
  site?: Site;
  role?: Role;

}

