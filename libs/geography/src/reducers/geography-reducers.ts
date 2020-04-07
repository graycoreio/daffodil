import { daffGeographyReducer } from './geography/geography.reducer';
import { daffCountryEntitiesReducer } from './country-entities/country-entities.reducer';

export const daffGeographyReducers = {
  geography: daffGeographyReducer,
  countries: daffCountryEntitiesReducer
}
