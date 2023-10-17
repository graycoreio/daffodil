import { ActionReducerMap } from '@ngrx/store';

import { daffCountryEntitiesReducer } from './country-entities/country-entities.reducer';
import { daffGeographyReducer } from './geography/geography.reducer';
import { DaffGeographyFeatureState } from './geography-reducers-state.interface';

export const daffGeographyReducers: ActionReducerMap<DaffGeographyFeatureState> = {
  geography: daffGeographyReducer,
  countries: daffCountryEntitiesReducer,
};
