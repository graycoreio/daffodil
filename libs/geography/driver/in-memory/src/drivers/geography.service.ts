import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  catchError,
  map,
} from 'rxjs/operators';

import { DaffCountry } from '@daffodil/geography';
import {
  DaffGeographyServiceInterface,
  DaffCountryNotFoundError,
} from '@daffodil/geography/driver';

@Injectable({
  providedIn: 'root',
})
export class DaffInMemoryGeographyService implements DaffGeographyServiceInterface<DaffCountry> {
  url = '/api/countries';

  constructor(private http: HttpClient) {}

  get(countryId: DaffCountry['id']): Observable<DaffCountry> {
    return this.http.get<DaffCountry>(`${this.url}/${countryId}`).pipe(
      catchError((error: Error) => throwError(DaffCountryNotFoundError)),
      map(result => result),
    );
  }

  list(): Observable<DaffCountry[]> {
    return this.http.get<DaffCountry[]>(`${this.url}/`);
  }
}
