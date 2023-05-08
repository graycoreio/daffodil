import {
  DaffCompositeProductItem,
  DaffCompositeProductItemOption,
} from './composite-product-item';

/**
 * Denotes a particular configuration for a composite item.
 */
export type DaffProductCompositeSelectionPayload = Record<DaffCompositeProductItem['id'], DaffCompositeProductItemOption['id'][]>;
