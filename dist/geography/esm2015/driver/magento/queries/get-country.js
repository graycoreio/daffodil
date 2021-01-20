/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import gql from 'graphql-tag';
import { countryFragment, regionFragment } from './fragments/public_api';
/** @type {?} */
export const getCountry = gql `
  query GetCountry($countryId: String!) {
    country(id: $countryId) {
      ...country
      available_regions {
        ...region
      }
    }
  }
  ${countryFragment}
  ${regionFragment}
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNvdW50cnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGFmZm9kaWwvZ2VvZ3JhcGh5L2RyaXZlci9tYWdlbnRvLyIsInNvdXJjZXMiOlsicXVlcmllcy9nZXQtY291bnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxHQUFHLE1BQU0sYUFBYSxDQUFDO0FBRTlCLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRXpFLE1BQU0sT0FBTyxVQUFVLEdBQUcsR0FBRyxDQUFBOzs7Ozs7Ozs7SUFTekIsZUFBZTtJQUNmLGNBQWM7Q0FDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcblxuaW1wb3J0IHsgY291bnRyeUZyYWdtZW50LCByZWdpb25GcmFnbWVudCB9IGZyb20gJy4vZnJhZ21lbnRzL3B1YmxpY19hcGknO1xuXG5leHBvcnQgY29uc3QgZ2V0Q291bnRyeSA9IGdxbGBcbiAgcXVlcnkgR2V0Q291bnRyeSgkY291bnRyeUlkOiBTdHJpbmchKSB7XG4gICAgY291bnRyeShpZDogJGNvdW50cnlJZCkge1xuICAgICAgLi4uY291bnRyeVxuICAgICAgYXZhaWxhYmxlX3JlZ2lvbnMge1xuICAgICAgICAuLi5yZWdpb25cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJHtjb3VudHJ5RnJhZ21lbnR9XG4gICR7cmVnaW9uRnJhZ21lbnR9XG5gO1xuIl19