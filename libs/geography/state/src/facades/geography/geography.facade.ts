import { Injectable } from '@angular/core';
import { Dictionary } from '@ngrx/entity';
import {
  Action,
  Store,
  select,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCountry } from '@daffodil/geography';

import { DaffGeographyFeatureState } from '../../reducers/public_api';
import {
  getDaffGeographySelectors,
  DaffGeographyAllSelectors,
} from '../../selectors/public_api';
import { DaffGeographyFacadeInterface } from './geography-facade.interface';

/**
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffGeographyFacade<T extends DaffCountry = DaffCountry> implements DaffGeographyFacadeInterface<T> {
  loading$: Observable<boolean>;
  errors$: Observable<DaffStateError[]>;

  countries$: Observable<T[]>;
  countryIds$: Observable<T['id'][]>;
  countryCount$: Observable<number>;
  countryEntities$: Observable<Dictionary<T>>;

  private _selectCountry: DaffGeographyAllSelectors<T>['selectCountry'];
  private _selectCountrySubdivisions: DaffGeographyAllSelectors<T>['selectCountrySubdivisions'];
  private _selectIsCountryFullyLoaded: DaffGeographyAllSelectors<T>['selectIsCountryFullyLoaded'];

  constructor(private store: Store<DaffGeographyFeatureState<T>>) {
    const {
      selectCountryIds,
      selectCountryEntities,
      selectAllCountries,
      selectCountryTotal,
      selectGeographyLoading,
      selectGeographyErrors,
      selectCountry,
      selectCountrySubdivisions,
      selectIsCountryFullyLoaded,
    } = getDaffGeographySelectors<T>();

    this._selectCountry = selectCountry;
    this._selectCountrySubdivisions = selectCountrySubdivisions;
    this._selectIsCountryFullyLoaded = selectIsCountryFullyLoaded;

    this.loading$ = this.store.pipe(select(selectGeographyLoading));
    this.errors$ = this.store.pipe(select(selectGeographyErrors));

    this.countries$ = this.store.pipe(select(selectAllCountries));
    this.countryIds$ = this.store.pipe(select(selectCountryIds));
    this.countryCount$ = this.store.pipe(select(selectCountryTotal));
    this.countryEntities$ = this.store.pipe(select(selectCountryEntities));
  }

  getCountry(id: T['id']): Observable<T> {
    return this.store.pipe(select(this._selectCountry, { id }));
  }

  getCountrySubdivisions(id: T['id']): Observable<T['subdivisions']> {
    return this.store.pipe(select(this._selectCountrySubdivisions, { id }));
  }

  isCountryFullyLoaded(id: T['id']): Observable<boolean> {
    return this.store.pipe(select(this._selectIsCountryFullyLoaded, { id }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
