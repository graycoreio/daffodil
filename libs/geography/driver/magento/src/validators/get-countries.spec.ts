import { ApolloQueryResult } from 'apollo-client';

import { DaffGeographyInvalidAPIResponseError } from '@daffodil/geography/driver';

import { MagentoGetCountriesResponse } from '../queries/public_api';
import { validateGetCountriesResponse as validator } from './get-countries';

describe('Driver | Magento | Auth | Validator | CheckToken', () => {
  let response: ApolloQueryResult<MagentoGetCountriesResponse>;

  beforeEach(() => {
    response = {
      data: {
        countries: []
      },
      loading: null,
      networkStatus: null,
      stale: null
    };
  });

  describe('when the response has a country list defined', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('when the response does not have a country list defined', () => {
    beforeEach(() => {
      response.data.countries = null;
    });

    it('should throw a DaffGeographyInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffGeographyInvalidAPIResponseError));
    });
  });
});
