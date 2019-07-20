import { DaffProductUnion } from "./product-union";

export interface DaffProductModification {
  id: string;
  modification: Partial<DaffProductUnion>;
}
