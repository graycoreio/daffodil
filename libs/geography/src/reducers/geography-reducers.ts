import { ActionReducerMap } from '@ngrx/store';

import { daffGeographyReducer } from './geography/geography.reducer';
import { DaffGeographyFeatureState } from './geography-reducers-state.interface';
import { daffCountryEntitiesReducer } from './country-entities/country-entities.reducer';
import { DaffCountry } from '../models/country';

export const daffGeographyReducers = <T extends DaffCountry>(): ActionReducerMap<DaffGeographyFeatureState<T>> => ({
  geography: daffGeographyReducer,
  countries: daffCountryEntitiesReducer
})
