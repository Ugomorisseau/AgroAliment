import {Service} from "./service";

export interface Site {
  id?: number;
  ville?: string;
  service?: Array<Service>;
}
