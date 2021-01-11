import { BehaviorSubject } from 'rxjs';
import { Action } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { Injectable } from '@angular/core';

import { DaffCountry } from '@daffodil/geography';
import { DaffGeographyFacadeInterface } from '@daffodil/geography/state';

@Injectable({providedIn: 'root'})
export class MockDaffGeographyFacade implements DaffGeographyFacadeInterface {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(null);
  errors$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  countries$: BehaviorSubject<DaffCountry[]> = new BehaviorSubject([]);
  countryIds$: BehaviorSubject<(string | number)[]> = new BehaviorSubject([]);
  countryCount$: BehaviorSubject<number> = new BehaviorSubject(null);
  countryEntities$: BehaviorSubject<Dictionary<DaffCountry>> = new BehaviorSubject(null);

  getCountry(id) {
    return new BehaviorSubject(null);
  }

  getCountrySubdivisions(id) {
    return new BehaviorSubject([]);
  }

  isCountryFullyLoaded(id) {
    return new BehaviorSubject(false)
  }

  dispatch(action: Action) {};
}
