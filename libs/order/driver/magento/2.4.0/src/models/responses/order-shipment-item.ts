import { MagentoGraycoreOrderItem } from './order-item';

export interface MagentoGraycoreOrderShipmentItem {
  __typename?: 'GraycoreOrderShipmentItem';
  item: MagentoGraycoreOrderItem;
  qty: number;
};
