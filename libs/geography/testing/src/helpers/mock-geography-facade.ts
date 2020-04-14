import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffGeographyFacadeInterface, DaffCountry } from '@daffodil/geography';

export class MockDaffGeographyFacade extends DaffGeographyFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  errors$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  countries$: BehaviorSubject<DaffCountry[]> = new BehaviorSubject([]);
  countryIds$: BehaviorSubject<(string | number)[]> = new BehaviorSubject([]);
  countryCount$: BehaviorSubject<number> = new BehaviorSubject(null);
  countryEntities$: BehaviorSubject<Dictionary<DaffCountry>> = new BehaviorSubject(null);

  dispatch(action: Action) {};
}
