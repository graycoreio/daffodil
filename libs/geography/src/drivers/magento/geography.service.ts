import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffGeographyServiceInterface } from '../interfaces/geography-service.interface';
import { DaffCountry } from '../../models/country';
import { DaffMagentoCountryTransformer } from './transforms/responses/country.service';
import { getCountries, MagentoGetCountriesResponse } from './queries/public_api';
import { getCountry } from './queries/get-country';
import { MagentoGetCountryResponse } from './queries/responses/get-country';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
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
      map(result => result.data.countries || []),
      map(result => result.map(country => this.countryTransformer.transform(country)))
    );
  }

  get(countryId: DaffCountry['id']): Observable<DaffCountry> {
    return this.apollo.query<MagentoGetCountryResponse>({
      query: getCountry,
      variables: {
        countryId
      }
    }).pipe(
      map(result => this.countryTransformer.transform(result.data.country))
    );
  }
}
