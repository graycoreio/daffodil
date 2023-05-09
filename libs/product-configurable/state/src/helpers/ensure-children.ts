import { DaffProductTypeEnum } from '@daffodil/product';
import { DaffConfigurableProduct } from '@daffodil/product-configurable';
import { DaffProductReducersState } from '@daffodil/product/state';

/**
 * Maps a list of products, ensuring that the configurable products have a list of child variant and attributes.
 * If the list of incoming children is empty or nully, the children from state are intentionally used instead.
 */
export function daffProductConfigurableEnsureChildren<T extends DaffConfigurableProduct = DaffConfigurableProduct>(state: DaffProductReducersState<T>, products: T[]): T[] {
  return products.map((product) =>
    product.type === DaffProductTypeEnum.Configurable
      ? {
        ...product,
        variants: product.variants.length > 0
          ? product.variants
          : state.products.entities[product.id]?.variants ?? [],
        configurableAttributes: product.configurableAttributes.length > 0
          ? product.configurableAttributes
          : state.products.entities[product.id]?.configurableAttributes ?? [],
      }
      : product,
  );
}
