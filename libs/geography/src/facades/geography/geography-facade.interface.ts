import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffCountry } from '../../models/country';

export interface DaffGeographyFacadeInterface<T extends DaffCountry = DaffCountry> extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  errors$: Observable<string[]>;
  countries$: Observable<T[]>;
  countryIds$: Observable<(string | number)[]>;
  countryCount$: Observable<number>;
  countryEntities$: Observable<Dictionary<T>>;

  getCountry(id: T['id']): Observable<T>;
  getCountrySubdivisions(id: T['id']): Observable<T['subdivisions']>;
  isCountryFullyLoaded(id: T['id']): Observable<boolean>
}
