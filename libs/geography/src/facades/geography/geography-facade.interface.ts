import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffCountry } from '../../models/country';

export interface DaffGeographyFacadeInterface<T extends DaffCountry = DaffCountry> {
  loading$: Observable<boolean>;
  errors$: Observable<string[]>;
  countries$: Observable<T[]>;
  countryIds$: Observable<(string | number)[]>;
  countryCount$: Observable<number>;
  countryEntities$: Observable<Dictionary<T>>;

  dispatch(action: Action): void;
}
