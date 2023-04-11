import {
  createEntityAdapter,
  EntityState,
} from '@ngrx/entity';
import { defaultMemoize } from '@ngrx/store';

import { DaffProductTypeEnum } from '@daffodil/product';
import {
  DaffCompositeProduct,
  DaffCompositeProductItem,
  DaffCompositeConfigurationItem,
  DaffCompositeProductItemOption,
} from '@daffodil/product-composite';

import { DaffCompositeProductEntity } from './composite-product-entity';

/**
 * Composite Product Item Options Adapter for changing/overwriting entity state.
 */
export class DaffCompositeProductAppliedOptionsEntitiesAdapter<T extends EntityState<DaffCompositeProductEntity> = EntityState<DaffCompositeProductEntity>> {
  /**
   * @docs-private
   */
  private _adapter = createEntityAdapter<DaffCompositeProductEntity>();

  /**
   * Gets the initial entity state.
   */
  getInitialState() {
    return this._adapter.getInitialState();
  }

  /**
   * Get the entity selectors.
   */
  getSelectors() {
    return this._adapter.getSelectors();
  }

  /**
   * Upserts the given composite products into state.
   */
  upsertProducts(state: T, ...products: DaffCompositeProduct[]): T {
    return this._adapter.upsertMany(
      this.mapOptionsEntities(products),
      state,
    );
  };

  /**
   * Apply the specified option for the given composite product item.
   */
  applyOption(state: T, productId: DaffCompositeProduct['id'], itemId: DaffCompositeProductItem['id'], optionId: DaffCompositeProductItemOption['id'], qty?: number) {
    return this._adapter.upsertOne(
      {
        id: productId,
        items: {
          ...state.entities[productId].items,
          [itemId]: {
            value: optionId,
            qty: qty ?? 1,
          },
        },
      },
      state,
    );
  }

  /**
   * @docs-private
   */
  private mapOptionsEntities(products: DaffCompositeProduct[]): DaffCompositeProductEntity[] {
    return products.filter(product => product.type === DaffProductTypeEnum.Composite)
      .map(product => this.buildCompositeProductAppliedOptionsEntity(product));
  }

  /**
   * @docs-private
   */
  private buildCompositeProductAppliedOptionsEntity(product: DaffCompositeProduct): DaffCompositeProductEntity {
    return {
      id: product.id,
      items: product.items.reduce((acc, item) => ({
        ...acc,
        [item.id]: this.getDefaultOption(item),
      }), {}),
    };
  }

  /**
   * Sets the default item option to the specified default option if it is in stock.
   * Does not set a default option if a default is not specified.
   * Does not set a default option but does set a default qty if the default is out of stock.
   *
   * @param item a DaffCompositeProductItem
   * @docs-private
   */
  private getDefaultOption(item: DaffCompositeProductItem): DaffCompositeConfigurationItem {
    const defaultOptionIndex = item.options.findIndex(option => option.is_default);

    if(defaultOptionIndex > -1) {
      return {
        value: item.options[defaultOptionIndex].in_stock ? item.options[defaultOptionIndex].id : null,
        qty: item.options[defaultOptionIndex].quantity,
      };
    } else {
      return { value: null, qty: null };
    }
  }
}

/**
 * Gets the composite product entity adapter singleton.
 */
export const daffCompositeProductAppliedOptionsEntitiesAdapter: () => DaffCompositeProductAppliedOptionsEntitiesAdapter = defaultMemoize(() => new DaffCompositeProductAppliedOptionsEntitiesAdapter()).memoized;
