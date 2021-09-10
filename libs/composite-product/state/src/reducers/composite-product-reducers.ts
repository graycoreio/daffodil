import { daffCompositeProductEntitiesReducer } from './composite-product-entities/composite-product-entities.reducer';

/**
 * Returns state values from all composite product related reducers.
 */
export const daffCompositeProductReducers = {
  compositeProductOptions: daffCompositeProductEntitiesReducer,
};
