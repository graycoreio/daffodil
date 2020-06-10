import { BehaviorSubject, of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffGeographyFacadeInterface, DaffCountry, DaffSubdivision } from '@daffodil/geography';

export class MockDaffGeographyFacade implements DaffGeographyFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  errors$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  countries$: BehaviorSubject<DaffCountry[]> = new BehaviorSubject([]);
  countryIds$: BehaviorSubject<(string | number)[]> = new BehaviorSubject([]);
  countryCount$: BehaviorSubject<number> = new BehaviorSubject(null);
  countryEntities$: BehaviorSubject<Dictionary<DaffCountry>> = new BehaviorSubject(null);

  getCountry(id): Observable<DaffCountry> {
    return of(null);
  }

  getCountrySubdivisions(id): Observable<DaffSubdivision[]> {
    return of([]);
  }

  isCountryFullyLoaded(id): Observable<boolean> {
    return of(false)
  }

  dispatch(action: Action) {};
}
