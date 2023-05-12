import {
  DOCUMENT,
  Location,
} from '@angular/common';
import {
  Inject,
  Injectable,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  DaffCompositeProductItem,
  DaffCompositeProductItemOption,
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
import { DaffProductCompositeQueryParamService } from '../services/query-param.service';

/**
 * Builds the apply actions from the list of selected options.
 */
function buildApplyActions<T extends DaffCompositeProduct = DaffCompositeProduct>(product: DaffCompositeProduct, itemId: DaffCompositeProductItem['id'], selectedOptions: DaffCompositeProductItemOption['id'][]): DaffCompositeProductApplyOption<T>[] {
  const selectionItem = product.items.find(({ id }) => id === itemId);

  return selectionItem
    ? selectedOptions.map(selectionOptionId => {
      // use the quantity of the referenced option
      const qty = selectionItem?.options.find(({ id }) => id === selectionOptionId)?.quantity;

      return new DaffCompositeProductApplyOption(product.id, itemId, selectionOptionId, qty);
    })
    : [];
}

/**
 * Handles composite product specific actions for the product page.
 */
@Injectable()
export class DaffProductCompositePageEffects<T extends DaffCompositeProduct = DaffCompositeProduct> {
  constructor(
    private actions$: Actions,
    private paramGetter: DaffProductCompositeQueryParamService,
    @Inject(DAFF_PRODUCT_COMPOSITE_ROUTING_CONFIG) private config: DaffProductCompositeRoutingConfig,
  ) {}

  /**
   * Applies composite item options based on the value of the configured query param.
   */
  preselectCompositeOptions$: Observable<typeof EMPTY | DaffCompositeProductApplyOption<T>> = createEffect(() => this.actions$.pipe(
    ofType(DaffProductPageActionTypes.ProductPageLoadSuccessAction),
    switchMap((action: DaffProductPageLoadSuccess<T>) => {
      const queryParam = this.paramGetter.get();

      // get the product corresponding to the current product page
      const product: DaffCompositeProduct = action.payload.products.filter(({ id }) => id === action.payload.id)[0];

      // if we don't have a query param set or if the product isn't composite,
      // we have nothing to do
      if (!queryParam || product?.type !== DaffProductTypeEnum.Composite) {
        return EMPTY;
      }

      let selection: DaffProductCompositeSelectionPayload;

      try {
        selection = this.config.compositeSelectionQueryParamDecode(queryParam, product);
      } catch (error) {
        return EMPTY;
      }

      const applyActions = Object.keys(selection).reduce<DaffCompositeProductApplyOption<T>[]>(
        (actions, itemId) => actions.concat(buildApplyActions(product, itemId, selection[itemId])),
        [],
      );

      // dispatch each of the apply actions into the action stream
      return of(...applyActions);
    }),
  ));
}
