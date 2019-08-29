import { ProductImageNode } from "./product-image-node";
import { ProductPriceNode } from "./product-price-node";

export interface ProductNode {
  id: number;
  name: string;
  sku: string;
  url_key: string;
  image: ProductImageNode;
  price: ProductPriceNode;
  media_gallery_entries?: any;
  short_description?: any;
  description?: any;
}
