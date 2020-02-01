import { ImageNode } from './image-node'
import { MoneyV2 } from './money-v2'
import { ProductNode } from './product-node'

export interface ProductVariantNode {
  id: string;
  image: ImageNode;
  priceV2: MoneyV2;
  sku: string;
  weight: number;
  product: ProductNode;
}
