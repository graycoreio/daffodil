import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyServiceInterface } from '@daffodil/geography/driver';

import { transformMagentoGeographyError } from './errors/transform';
import { getCountry } from './queries/get-country';
import {
  getCountries,
  MagentoGetCountriesResponse,
} from './queries/public_api';
import { MagentoGetCountryResponse } from './queries/responses/get-country';
import { DaffMagentoCountryTransformer } from './transforms/responses/country.service';
import { validateGetCountriesResponse } from './validators/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffGeographyMagentoService implements DaffGeographyServiceInterface<DaffCountry> {
  constructor(
    private apollo: Apollo,
    public countryTransformer: DaffMagentoCountryTransformer,
  ) {}

  list(): Observable<DaffCountry[]> {
    return this.apollo.query<MagentoGetCountriesResponse>({
      query: getCountries,
    }).pipe(
      map(validateGetCountriesResponse),
      map(result => result.data.countries.map(country => this.countryTransformer.transform(country))),
      catchError(err => throwError(() => transformMagentoGeographyError(err))),
    );
  }

  get(countryId: DaffCountry['id']): Observable<DaffCountry> {
    return this.apollo.query<MagentoGetCountryResponse>({
      query: getCountry,
      variables: {
        countryId,
      },
    }).pipe(
      map(result => this.countryTransformer.transform(result.data.country)),
      catchError(err => throwError(() => transformMagentoGeographyError(err))),
    );
  }
}
