import { DaffProduct } from "./product";

export interface DaffProductUnion extends DaffProduct {
  [x: string]: any
}
