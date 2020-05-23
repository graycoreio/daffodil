import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  DaffGeographyServiceInterface,
  DaffCountry
} from '@daffodil/geography';

import { DaffCountryFactory } from '../../factories/country.factory';
import { DaffSubdivisionFactory } from '../../factories/subdivision.factory';

@Injectable({
  providedIn: 'root'
})
export class DaffTestingGeographyService implements DaffGeographyServiceInterface<DaffCountry> {

  constructor(
    private countryFactory: DaffCountryFactory,
    private subdivisionFactory: DaffSubdivisionFactory,
  ) {}

  get(countryId: DaffCountry['id']): Observable<DaffCountry> {
    return of(this.countryFactory.create({
      id: countryId,
      subdivisions: this.subdivisionFactory.createMany(3)
    }));
  }

  list(): Observable<DaffCountry[]> {
    return of(this.countryFactory.createMany(5));
  }
}
