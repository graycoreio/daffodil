import {
  createEntityAdapter,
  EntityState,
} from '@ngrx/entity';
import { defaultMemoize } from '@ngrx/store';

import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';
import {
  DaffConfigurableProduct,
  DaffConfigurableProductAttribute,
  DaffConfigurableProductOptionValue,
} from '@daffodil/product-configurable';

import {
  DaffConfigurableProductEntity,
  DaffConfigurableProductEntityAttribute,
} from './configurable-product-entity';

/**
 * Configurable Product Applied Attributes Adapter for changing/overwriting entity state.
 */
export class DaffConfigurableProductAppliedAttributesEntitiesAdapter<T extends EntityState<DaffConfigurableProductEntity> = EntityState<DaffConfigurableProductEntity>> {
  /**
   * @docs-private
   */
  private _adapter = createEntityAdapter<DaffConfigurableProductEntity>();

  getInitialState() {
    return this._adapter.getInitialState();
  }

  getSelectors() {
    return this._adapter.getSelectors();
  }

  /**
   * Upserts the given composite products into state.
   */
  upsertProducts(state: T, ...products: DaffConfigurableProduct[]): T {
    return this._adapter.upsertMany(
      this.mapEntities(products),
      state,
    );
  };

  /**
   * Apply the given attribute to the specified product in state.
   */
  applyAttribute(state: T, productId: DaffConfigurableProduct['id'], attributeId: DaffConfigurableProductAttribute['code'], attributeValue: DaffConfigurableProductOptionValue['value']) {
    return this._adapter.upsertOne(
      {
        id: productId,
        attributes: this._applyAttribute(state.entities[productId].attributes, attributeId, attributeValue),
      },
      state,
    );
  }

  /**
   * Remove the given attribute to the specified product in state.
   */
  removeAttribute(state: T, productId: DaffConfigurableProduct['id'], attributeId: DaffConfigurableProductAttribute['code']) {
    return this._adapter.upsertOne(
      {
        id: productId,
        attributes: this._removeAttribute(state.entities[productId].attributes, attributeId),
      },
      state,
    );
  }

  /**
   * Toggle the given attribute to the specified product in state.
   */
  toggleAttribute(state: T, productId: DaffConfigurableProduct['id'], attributeId: DaffConfigurableProductAttribute['code'], attributeValue: DaffConfigurableProductOptionValue['value']) {
    return this.isAttributeSelected(state.entities[productId].attributes, attributeId, attributeValue) ?
      this.removeAttribute(state, productId, attributeId) :
      this.applyAttribute(state, productId, attributeId, attributeValue);
  }

  /**
   * @docs-private
   */
  private mapEntities(products: DaffConfigurableProduct[]): DaffConfigurableProductEntity[] {
    return products.filter(product => product.type === DaffProductTypeEnum.Configurable)
      .map(product => this.buildConfigurableProductAppliedAttributesEntity(product));
  }

  /**
   * @docs-private
   */
  private buildConfigurableProductAppliedAttributesEntity(product: DaffProduct): DaffConfigurableProductEntity {
    return {
      id: product.id,
      attributes: [],
    };
  }

  /**
   * @docs-private
   */
  private _applyAttribute(currentAttributes: DaffConfigurableProductEntityAttribute[], appliedAttributeCode: string, appliedAttributeValue: string): DaffConfigurableProductEntityAttribute[] {
    const attributeIndex = currentAttributes.findIndex(attribute => attribute.code === appliedAttributeCode);
    const retainedAttributes = attributeIndex > -1 ? currentAttributes.slice(0, attributeIndex) : currentAttributes;

    return [
      ...retainedAttributes,
      {
        code: appliedAttributeCode,
        value: appliedAttributeValue,
      },
    ];
  }

  /**
   * @docs-private
   */
  private _removeAttribute(currentAttributes: DaffConfigurableProductEntityAttribute[], appliedAttributeCode: string): DaffConfigurableProductEntityAttribute[] {
    const index = currentAttributes.findIndex(attribute => attribute.code === appliedAttributeCode);

    return index > -1 ? currentAttributes.slice(0, index) : currentAttributes;
  }

  /**
   * @docs-private
   */
  private isAttributeSelected(currentAttributes: DaffConfigurableProductEntityAttribute[], attributeCode: string, attributeValue: string): boolean {
    const index = currentAttributes.findIndex(attribute => attribute.code === attributeCode);

    return index > -1 && currentAttributes[index].value === attributeValue;
  }
}

/**
 * Gets the configurable product entity adapter singleton.
 */
export const daffConfigurableProductAppliedAttributesEntitiesAdapter: () => DaffConfigurableProductAppliedAttributesEntitiesAdapter = defaultMemoize(() => new DaffConfigurableProductAppliedAttributesEntitiesAdapter()).memoized;
