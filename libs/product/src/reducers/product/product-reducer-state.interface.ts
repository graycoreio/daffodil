/**
 * Interface for product state.
 */
export interface DaffProductReducerState {
  selectedProductId: string,
  qty: number,
  loading: boolean,
  errors: string[]
}
