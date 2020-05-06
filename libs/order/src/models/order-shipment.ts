import { DaffOrderShipmentItem } from './order-shipment-item';
import { DaffOrderShipmentTracking } from './order-shipment-tracking';

export interface DaffOrderShipment {
  tracking: DaffOrderShipmentTracking[];
  items: DaffOrderShipmentItem[];
  carrier: string;
  carrier_title: string;
  code: string;
  method: string;
  method_description: string;
}
