import { DaffProductInvalidAPIResponseError } from '@daffodil/product/driver';

import { magentoAttributesListValidator } from './validator';

describe('@daffodil/product/driver/magento | magentoAttributesListValidator', () => {
  describe('when the response contains attributesList items', () => {
    it('should return the response', () => {
      const response = {
        data: {
          attributesList: {
            items: [],
            errors: [],
          },
        },
      };

      expect(magentoAttributesListValidator(<any>response)).toEqual(<any>response);
    });
  });

  describe('when the response does not contain attributesList items', () => {
    it('should throw a DaffProductInvalidAPIResponseError', () => {
      const response = {
        data: {
          attributesList: null,
        },
      };

      expect(() => magentoAttributesListValidator(<any>response)).toThrow(
        new DaffProductInvalidAPIResponseError('The platform did not respond with custom attributes.'),
      );
    });
  });
});
