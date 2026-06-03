import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';

import { DaffContentInvalidAPIResponseError } from '@daffodil/content/driver';
import { MagentoContentGetPageResponse } from '@daffodil/content/driver/magento';
import { MagentoCmsPageFactory } from '@daffodil/content/driver/magento/testing';

import { validateMagentoContentGetPageResponse as validator } from './get-page';

describe('@daffodil/content/driver/magento | validateMagentoContentGetPageResponse', () => {
  let response: Apollo.QueryResult<MagentoContentGetPageResponse>;
  let factory: MagentoCmsPageFactory;

  beforeEach(() => {
    factory = TestBed.inject(MagentoCmsPageFactory);

    response = {
      data: {
        route: factory.create(),
      },
    };
  });

  describe('when the response has a content page defined', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('when the response does not have a page defined', () => {
    beforeEach(() => {
      response.data.route = null;
    });

    it('should throw a DaffContentInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrowError(DaffContentInvalidAPIResponseError);
    });
  });

  describe('when the response has an content without a title', () => {
    beforeEach(() => {
      delete response.data.route.title;
    });

    it('should throw a DaffContentInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrowError(DaffContentInvalidAPIResponseError);
    });
  });
});
