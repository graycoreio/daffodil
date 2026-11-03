import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  Observable,
  throwError,
} from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

import { DaffCollectionRequest } from '@daffodil/core';
import { DaffProduct } from '@daffodil/product';
import { DaffProductReviews } from '@daffodil/reviews';
import { DaffProductReviewsServiceInterface } from '@daffodil/reviews/driver';

import { transformMagentoReviewsError } from './errors/transform';
import { MagentoGetProductReviewsResponse } from './models/public_api';
import { getProductReviews } from './queries/public_api';
import { magentoProductReviewsTransform } from './transforms/public_api';
import { validateGetProductReviewsResponse } from './validators/public_api';

/**
 * A service for making Magento GraphQL queries for carts.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffReviewsMagentoService implements DaffProductReviewsServiceInterface {
  constructor(
    private apollo: Apollo,
  ) {}

  list(productId: DaffProduct['id'], request: DaffCollectionRequest = {}): Observable<DaffProductReviews> {
    return this.apollo.query<MagentoGetProductReviewsResponse>({
      query: getProductReviews,
      variables: {
        id: productId,
        pageSize: request.pageSize,
        currentPage: request.currentPage,
      },
    }).pipe(
      map(validateGetProductReviewsResponse),
      map(result => magentoProductReviewsTransform(result.data)),
      catchError(err => throwError(() => transformMagentoReviewsError(err))),
    );
  }
}
