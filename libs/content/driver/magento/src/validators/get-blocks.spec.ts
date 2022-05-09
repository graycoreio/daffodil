import { ApolloQueryResult } from '@apollo/client/core';

import { DaffContentInvalidAPIResponseError } from '@daffodil/content/driver';
import { MagentoGetBlocksResponse } from '@daffodil/content/driver/magento';

import { validateGetBlocksResponse as validator } from './get-blocks';

describe('@daffodil/content/driver/magento | validateGetBlocksResponse', () => {
  let response: ApolloQueryResult<MagentoGetBlocksResponse>;

  beforeEach(() => {
    response = {
      data: {
        cmsBlocks: {
          items: [],
        },
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('when the response has a content list defined', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('when the response does not have a content list defined', () => {
    beforeEach(() => {
      response.data.cmsBlocks.items = null;
    });

    it('should throw a DaffContentInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffContentInvalidAPIResponseError));
    });
  });

  describe('when the response has an content without a billing address, shipping address, or payment', () => {
    beforeEach(() => {
      response.data.cmsBlocks.items = [<any>{}];
    });

    it('should throw a DaffContentInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffContentInvalidAPIResponseError));
    });
  });
});
