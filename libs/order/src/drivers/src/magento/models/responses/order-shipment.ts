import { MagentoGraycoreOrderShipmentItem } from './order-shipment-item';
import { MagentoGraycoreOrderShipmentTracking } from './order-shipment-tracking';

export interface MagentoGraycoreOrderShipment {
  tracking: MagentoGraycoreOrderShipmentTracking[];
  items: MagentoGraycoreOrderShipmentItem[];
};
