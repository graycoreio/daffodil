import {
  ShopifyFilter,
  ShopifyProductFilter,
} from '../codegen/generated-shopify-types';

/**
 * Returns whether a ShopifyFilter['values'][number]['input'] {@link ShopifyFilter} JSON string is applied in a given Shopify Collection query request.
 */
export const daffShopifyIsFilterApplied = (shopifyFilterJSONInput: ShopifyFilter['values'][number]['input'], shopifyProductFilters: ShopifyProductFilter[]): boolean => {
  const visited: Record<string, boolean> = {};
  const parsedData = JSON.parse(shopifyFilterJSONInput);
  const filterName = Object.keys(parsedData)[0];
  const filterValue = parsedData[filterName];
  for (const queryFilter of shopifyProductFilters) {
    if (isValidVisit(visited, filterName, queryFilter[filterName]) && JSON.stringify(queryFilter[filterName]) === JSON.stringify(filterValue)) {
      return true;
    }
    if (filterName === 'available' || filterName === 'price') {
      if (queryFilter[filterName] !== null) {
        visited[filterName] = true;
      }
    }
  }
  return false;
};

/**
 * Checks if the visit on a filter is valid, i.e., it is not null. For the 'available' and 'price' filters, we must also check that they have not been
 * previously visited, since Shopify only considers the first occurrence.
 */
function isValidVisit(visited: Record<string, boolean>, filterName: string, filterValue: any): boolean {
  if (filterName === 'available' || filterName === 'price') {
    return !(visited[filterName]) && filterValue !== null;
  }
  return filterValue !== null;
}
