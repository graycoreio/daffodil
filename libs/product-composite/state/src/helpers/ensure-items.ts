import { DaffProductTypeEnum } from '@daffodil/product';
import { DaffProductReducersState } from '@daffodil/product/state';
import { DaffCompositeProduct } from '@daffodil/product-composite';

/**
 * Maps a list of products, ensuring that the composite products have a list of items.
 * If the incoming items is empty or nully, the items from state are intentionally used instead.
 */
export function daffProductCompositeEnsureItems<T extends DaffCompositeProduct = DaffCompositeProduct>(state: DaffProductReducersState<T>, products: T[]): T[] {
  return products.map((product) =>
    product.type === DaffProductTypeEnum.Composite
      ? {
        ...product,
        items: product.items.length > 0
          ? product.items
          : state.products.entities[product.id]?.items ?? [],
      }
      : product,
  );
}
