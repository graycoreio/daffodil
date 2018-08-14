import { Address } from "./address";

export interface DaffodilAddress extends Address {
  firstname: string;
  lastname: string;
  street: string;
  city: string;
  state: string;
  postcode: string;
  telephone: string;
}
