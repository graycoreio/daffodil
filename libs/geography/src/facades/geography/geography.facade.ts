import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action, Store, select } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { DaffStoreFacade } from '@daffodil/core';

import { DaffGeographyFeatureState } from '../../reducers/public_api';
import {
  getDaffGeographySelectors
} from '../../selectors/public_api';
import { DaffCountry } from '../../models/country';

@Injectable({
  providedIn: 'root'
})
export class DaffGeographyFacade<T extends DaffCountry> implements DaffStoreFacade<Action> {
  loading$: Observable<boolean>;
  errors$: Observable<string[]>;

  countries$: Observable<T[]>;
  ids$: Observable<(string | number)[]>;
  countryCount$: Observable<number>;
  countryEntities$: Observable<Dictionary<T>>;

  constructor(private store: Store<DaffGeographyFeatureState<T>>) {
    const  {
      selectCountryIds,
      selectCountryEntities,
      selectAllCountries,
      selectCountryTotal,
      selectGeographyLoading,
      selectGeographyErrors
    } = getDaffGeographySelectors<T>();

    this.loading$ = this.store.pipe(select(selectGeographyLoading));
    this.errors$ = this.store.pipe(select(selectGeographyErrors));

    this.countries$ = this.store.pipe(select(selectAllCountries));
    this.ids$ = this.store.pipe(select(selectCountryIds));
    this.countryCount$ = this.store.pipe(select(selectCountryTotal));
    this.countryEntities$ = this.store.pipe(select(selectCountryEntities));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
