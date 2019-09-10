import { DaffProductUnion } from "./product-union";

/**
 * An interface to facilitate adding additional properties to a DaffProduct, unique to your particular application.
 */
export interface DaffProductModification {
  id: string;
  modification: Partial<DaffProductUnion>;
}
