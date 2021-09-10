import { daffConfigurableProductEntitiesReducer } from './configurable-product-entities/configurable-product-entities.reducer';

/**
 * Returns state values from all configurable product related reducers.
 */
export const daffConfigurableProductReducers = {
  configurableProductAttributes: daffConfigurableProductEntitiesReducer,
};
