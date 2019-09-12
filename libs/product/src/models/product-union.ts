import { DaffProduct } from "./product";

/**
 * A DaffProduct that can hold unique modifications particular to the kind of product object your application needs.
 */
export interface DaffProductUnion extends DaffProduct {
  [x: string]: any
}
