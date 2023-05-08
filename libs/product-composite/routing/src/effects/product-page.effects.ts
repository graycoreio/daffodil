import { Location } from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';
import {
  Actions,
  Effect,
  createEffect,
  ofType,
} from '@ngrx/effects';
import {
  EMPTY,
  Observable,
  of,
} from 'rxjs';
import {
  map,
  switchMap,
} from 'rxjs/operators';

import {
  DaffProduct,
  DaffProductTypeEnum,
} from '@daffodil/product';
import {
  DaffCompositeProduct,
  DaffProductCompositeSelectionPayload,
} from '@daffodil/product-composite';
import { DaffCompositeProductApplyOption } from '@daffodil/product-composite/state';
import {
  DaffProductPageActionTypes,
  DaffProductPageLoadSuccess,
} from '@daffodil/product/state';

import {
  DaffProductCompositeRoutingConfig,
  DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG,
} from '../config/public_api';

/**
 * IE compatible query params getter.
 */
// TODO: replace with URLSearchParams when IE support is dropped
const getQueryParams = (path: string): Record<string, string> => {
  const params = {};
  path.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    (_, key, value) => params[key] = decodeURIComponent(value),
  );
  return params;
};

/**
 * Handles composite product specific actions for the product page.
 */
@Injectable()
export class DaffProductCompositePageEffects<T extends DaffCompositeProduct = DaffCompositeProduct> {

  constructor(
    private actions$: Actions,
    private location: Location,
    @Inject(DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG) private config: DaffProductCompositeRoutingConfig,
  ) {}

  /**
   * Applies composite item options based on the value of the configured query param.
   */
  preselectCompositeOptions$: Observable<typeof EMPTY | DaffCompositeProductApplyOption<T>> = createEffect(() => this.actions$.pipe(
    ofType(DaffProductPageActionTypes.ProductPageLoadSuccessAction),
    switchMap((action: DaffProductPageLoadSuccess<T>) => {
      const queryParam = getQueryParams(this.location.path())[this.config.compositeSelectionQueryParam];
      const product: DaffCompositeProduct = action.payload.products.filter(({ id }) => id === action.payload.id)[0];

      if (!queryParam || product?.type !== DaffProductTypeEnum.Composite) {
        return EMPTY;
      }

      let selection: DaffProductCompositeSelectionPayload;

      try {
        selection = this.config.compositeSelectionQueryParamDecode(queryParam, product);
      } catch (error) {
        return EMPTY;
      }

      return of(...Object.keys(selection).reduce<DaffCompositeProductApplyOption<T>[]>(
        (actions, itemId) =>
          actions.concat(selection[itemId].map(optionId => {
            const qty = product.items.filter(({ id }) =>
              id === itemId,
            )[0]?.options.filter(({ id }) => id === optionId)[0]?.quantity;

            return new DaffCompositeProductApplyOption(product.id, itemId, optionId, qty);
          })),
        [],
      ));
    }),
  ));
}
