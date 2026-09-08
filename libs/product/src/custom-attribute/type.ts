import { DaffIdentifiable } from '@daffodil/core';

import { DaffProductCustomAttributeKind } from './kind.enum';

/**
 * Represents a selection of a discrete list of values as a value for a custom attribute.
 */
export interface DaffProductCustomAttributeOption extends DaffIdentifiable {
  /**
   * The human readable label of the attribute.
   */
  label: string;
}

/**
 * Represents a custom attribute that can be added to an ecommerce model.
 * Custom attributes are used to add rich data such as a product brand.
 */
export interface DaffProductCustomAttributeBase extends DaffIdentifiable {
  /**
   * The type of the custom attribute.
   */
  kind: DaffProductCustomAttributeKind;

  /**
   * The human-readable label of the attribute.
   */
  label: string;
}

export interface DaffProductCustomAttributeScalar extends DaffProductCustomAttributeBase {
  kind: DaffProductCustomAttributeKind.SCALAR;
}

export interface DaffProductCustomAttributeSelect extends DaffProductCustomAttributeBase {
  kind: DaffProductCustomAttributeKind.SELECT;

  /**
   * A list of selectable options.
   */
  options: Array<DaffProductCustomAttributeOption>;
}

export type DaffProductCustomAttribute = DaffProductCustomAttributeScalar | DaffProductCustomAttributeSelect;
