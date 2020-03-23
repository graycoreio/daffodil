import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffGeographyServiceInterface } from '../interfaces/geography-service.interface';
import { DaffCountry } from '../../models/country';
import { DaffMagentoCountryTransformer } from './transforms/responses/country.service';
import { getCountries, MagentoGetCountriesResponse } from './queries/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 */
@Injectable({
  providedIn: 'root'
})
export class DaffMagentoGeographyService implements DaffGeographyServiceInterface<DaffCountry> {
  constructor(
    private apollo: Apollo,
    public countryTransformer: DaffMagentoCountryTransformer,
  ) {}

  list(): Observable<DaffCountry[]> {
    return this.apollo.query<MagentoGetCountriesResponse>({
      query: getCountries,
    }).pipe(
      map(result => result.data.countries
        ? result.data.countries.map(country => this.countryTransformer.transform(country))
        : []
      )
    );
  }

  get(countryId: DaffCountry['id']): Observable<DaffCountry> {
    return this.list().pipe(
      map(countries =>
        countries.find(country => country.id === countryId)
      )
    )
  }
}
