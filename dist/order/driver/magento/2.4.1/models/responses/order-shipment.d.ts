import { MagentoOrderShipmentItem } from './order-shipment-item';
import { MagentoOrderShipmentTracking } from './order-shipment-tracking';
export interface MagentoOrderShipment {
    tracking: MagentoOrderShipmentTracking[];
    items: MagentoOrderShipmentItem[];
}
