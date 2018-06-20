import { Address } from "../../../interfaces/models/address";

export interface ShippingAddress extends Address {
  firstname: string;
  lastname: string;
  street: string;
  city: string;
  state: string;
  postcode: string;
  telephone: string;
}