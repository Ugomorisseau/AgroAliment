import {Service} from "./service";

export interface User {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  phone?: number;
  phoneFix?: number;
  isAdmin?: boolean;
  password?: string;
  serviceId?: number;
  service?: Service;
}

