import { DaffIdentifiable } from '@daffodil/core';

import { DaffProductCustomAttributeKind } from './kind.enum';
import { DaffProductCustomAttributeOption } from './type';

export interface DaffProductCustomAttributeValueBase extends DaffIdentifiable {
  /**
   * The type of the custom attribute.
   */
  kind: DaffProductCustomAttributeKind;
}

export interface DaffProductCustomAttributeValueScalar extends DaffProductCustomAttributeValueBase {
  kind: DaffProductCustomAttributeKind.SCALAR;

  /**
   * The value of the custom attribute, coerced to a string.
   */
  value: string;
}

export interface DaffProductCustomAttributeValueSelect extends DaffProductCustomAttributeValueBase {
  kind: DaffProductCustomAttributeKind.SELECT;

  /**
   * A list of selections.
   */
  values: Array<DaffProductCustomAttributeOption['id']>;
}

export type DaffProductCustomAttributeValue = DaffProductCustomAttributeValueScalar | DaffProductCustomAttributeValueSelect;
