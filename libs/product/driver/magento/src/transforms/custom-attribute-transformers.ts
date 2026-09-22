import { Injectable } from '@angular/core';

import {
  DaffProductCustomAttribute,
  DaffProductCustomAttributeKind,
} from '@daffodil/product';

import {
  MagentoAttribute,
  MagentoAttributeFrontendInputEnum,
} from '../custom-attributes/public_api';

/**
 * Transforms a magento MagentoAttribute from the custom attribute metadata query into a DaffProductCustomAttribute.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCustomAttributeTransformer {
  transformMagentoAttribute(attribute: MagentoAttribute): DaffProductCustomAttribute {
    switch (attribute.frontend_input) {
      case MagentoAttributeFrontendInputEnum.SELECT:
      case MagentoAttributeFrontendInputEnum.MULTISELECT:
        return {
          id: attribute.code,
          kind: DaffProductCustomAttributeKind.SELECT,
          label: attribute.label,
          options: attribute.options.map(option => ({
            id: option.value,
            label: option.label,
          })),
        };

      default:
        return {
          id: attribute.code,
          kind: DaffProductCustomAttributeKind.SCALAR,
          label: attribute.label,
        };
    }
  }
}
