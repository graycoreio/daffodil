import { Dictionary } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  DaffStoreFacade,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffCountry } from '@daffodil/geography';

export interface DaffGeographyFacadeInterface<T extends DaffCountry = DaffCountry> extends DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;
  countries$: Observable<T[]>;
  countryIds$: Observable<T['id'][]>;
  countryCount$: Observable<number>;
  countryEntities$: Observable<Dictionary<T>>;

  getCountry(id: T['id']): Observable<T>;
  getCountrySubdivisions(id: T['id']): Observable<T['subdivisions']>;
  isCountryFullyLoaded(id: T['id']): Observable<boolean>;
}
