import { DaffCartShippingRate } from "./cart-shipping-rate";

export interface DaffCartShippingInformation extends DaffCartShippingRate {
  address_id: string | number;
}