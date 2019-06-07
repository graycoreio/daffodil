import { DaffProductImage } from "./product-image";

export interface DaffProduct {
  id: string;
  price?: string;
  name?: string;
  brand?: string;
  description?: string;
  images?: DaffProductImage[];
}
