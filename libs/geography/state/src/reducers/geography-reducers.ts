import { daffCountryEntitiesReducer } from './country-entities/country-entities.reducer';
import { daffGeographyReducer } from './geography/geography.reducer';

export const daffGeographyReducers = {
  geography: daffGeographyReducer,
  countries: daffCountryEntitiesReducer,
};
