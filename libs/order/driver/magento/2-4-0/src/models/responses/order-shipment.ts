import { MagentoGraycoreOrderShipmentItem } from './order-shipment-item';
import { MagentoGraycoreOrderShipmentTracking } from './order-shipment-tracking';

export interface MagentoGraycoreOrderShipment {
  __typename?: 'GraycoreOrderShipment';
  tracking: MagentoGraycoreOrderShipmentTracking[];
  items: MagentoGraycoreOrderShipmentItem[];
};
