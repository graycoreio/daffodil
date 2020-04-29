export interface DaffOrderShippingRate {
  rate_id: number;
  address_id: number;
  created_at: Date;
  updated_at: Date;
  carrier: string;
  carrier_title: string;
  code: string;
  method: string;
  method_description: string;
  price: number;
  error_message: string;
  method_title: string;
}
