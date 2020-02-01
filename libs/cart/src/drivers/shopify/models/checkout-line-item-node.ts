import { ProductVariantNode } from './product-variant-node';

export interface CheckoutLineItemNode {
  id: string;
  quantity: number;
  title: string;
  variant: ProductVariantNode;
}
