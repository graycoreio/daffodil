import { ActionReducerMap } from '@ngrx/store';

import { daffCountryEntitiesReducer } from './country-entities/country-entities.reducer';
import { DaffGeographyFeatureState } from './geography-reducers-state.interface';
import { daffGeographyReducer } from './geography/geography.reducer';

export const daffGeographyReducers: ActionReducerMap<DaffGeographyFeatureState> = {
  geography: daffGeographyReducer,
  countries: daffCountryEntitiesReducer,
};
