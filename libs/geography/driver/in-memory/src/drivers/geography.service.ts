import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryBackendConfig } from 'angular-in-memory-web-api';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  catchError,
  map,
} from 'rxjs/operators';

import { DaffInMemoryDriverBase } from '@daffodil/driver/in-memory';
import { DaffCountry } from '@daffodil/geography';
import {
  DaffGeographyServiceInterface,
  DaffCountryNotFoundError,
} from '@daffodil/geography/driver';

import { DAFF_GEOGRAPHY_IN_MEMORY_COLLECTION_NAME } from '../collection-name.const';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryGeographyService extends DaffInMemoryDriverBase implements DaffGeographyServiceInterface<DaffCountry> {
  constructor(
    private http: HttpClient,
    config: InMemoryBackendConfig,
  ) {
    super(config, DAFF_GEOGRAPHY_IN_MEMORY_COLLECTION_NAME);
  }

  get(countryId: DaffCountry['id']): Observable<DaffCountry> {
    return this.http.get<DaffCountry>(`${this.url}/${countryId}`).pipe(
      catchError((error: Error) => throwError(() => new DaffCountryNotFoundError('Country could not be found'))),
      map(result => result),
    );
  }

  list(): Observable<DaffCountry[]> {
    return this.http.get<DaffCountry[]>(`${this.url}/`);
  }
}
