import {Service} from "./service";

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
  service?: Service;
}

