import { CartNode } from './cart-node';

export interface Cart extends CartNode {
  customer_id: string;
}
