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
 * Transforms a magento MagentoAttribute from the attributesList query into a DaffProductCustomAttribute.
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

  /**
   * Transforms many magento MagentoAttributes from the attributesList query into DaffProductCustomAttributes.
   */
  transformManyMagentoAttributes(attributes: MagentoAttribute[]): DaffProductCustomAttribute[] {
    return attributes.map(attribute => this.transformMagentoAttribute(attribute));
  }
}
