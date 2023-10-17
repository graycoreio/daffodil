import { MagentoOrderShipmentItem } from './order-shipment-item';
import { MagentoOrderShipmentTracking } from './order-shipment-tracking';

export interface MagentoOrderShipment {
  __typename?: 'OrderShipment';
  tracking: MagentoOrderShipmentTracking[];
  items: MagentoOrderShipmentItem[];
};
