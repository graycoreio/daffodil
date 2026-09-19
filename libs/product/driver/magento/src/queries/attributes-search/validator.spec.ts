import { DaffProductInvalidAPIResponseError } from '@daffodil/product/driver';

import { magentoAttributesSearchValidator } from './validator';

describe('@daffodil/product/driver/magento | magentoAttributesSearchValidator', () => {
  describe('when the response contains customAttributeMetadataV2 items', () => {
    it('should return the response', () => {
      const response = {
        data: {
          customAttributeMetadataV2: {
            items: [],
            errors: [],
          },
        },
      };

      expect(magentoAttributesSearchValidator(<any>response)).toEqual(<any>response);
    });
  });

  describe('when the response does not contain customAttributeMetadataV2 items', () => {
    it('should throw a DaffProductInvalidAPIResponseError', () => {
      const response = {
        data: {
          customAttributeMetadataV2: null,
        },
      };

      expect(() => magentoAttributesSearchValidator(<any>response)).toThrow(
        new DaffProductInvalidAPIResponseError('The platform did not respond with custom attributes.'),
      );
    });
  });
});
