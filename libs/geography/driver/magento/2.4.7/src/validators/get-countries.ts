import { Apollo } from 'apollo-angular';

import { DaffGeographyInvalidAPIResponseError } from '@daffodil/geography/driver';

import { MagentoGetCountriesResponse } from '../queries/public_api';

export const validateGetCountriesResponse = (response: Apollo.QueryResult<MagentoGetCountriesResponse>) => {
  if (response.data.countries) {
    return response;
  } else {
    throw new DaffGeographyInvalidAPIResponseError('Get countries response does not contain a valid list of countries.');
  }
};
