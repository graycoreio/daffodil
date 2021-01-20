/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { countryFragment } from './fragments/public_api';
/** @type {?} */
export const getCountries = gql `
  query GetCountries {
    countries {
      ...country
    }
  }
  ${countryFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNvdW50cmllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkYWZmb2RpbC9nZW9ncmFwaHkvZHJpdmVyL21hZ2VudG8vIiwic291cmNlcyI6WyJxdWVyaWVzL2dldC1jb3VudHJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sR0FBRyxNQUFNLGFBQWEsQ0FBQztBQUU5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXpELE1BQU0sT0FBTyxZQUFZLEdBQUcsR0FBRyxDQUFBOzs7Ozs7SUFNM0IsZUFBZTtDQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuXG5pbXBvcnQgeyBjb3VudHJ5RnJhZ21lbnQgfSBmcm9tICcuL2ZyYWdtZW50cy9wdWJsaWNfYXBpJztcblxuZXhwb3J0IGNvbnN0IGdldENvdW50cmllcyA9IGdxbGBcbiAgcXVlcnkgR2V0Q291bnRyaWVzIHtcbiAgICBjb3VudHJpZXMge1xuICAgICAgLi4uY291bnRyeVxuICAgIH1cbiAgfVxuICAke2NvdW50cnlGcmFnbWVudH1cbmA7XG4iXX0=