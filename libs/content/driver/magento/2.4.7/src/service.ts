import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { throwError } from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

import {
  DaffContentBlock,
  daffContentBlockArrayToCollection,
} from '@daffodil/content';
import { DaffContentServiceInterface } from '@daffodil/content/driver';

import { transformMagentoContentError } from './errors/transform';
import { MagentoGetBlocksResponse } from './models/public_api';
import { getCmsBlocks } from './queries/public_api';
import { magentoContentBlockTransform } from './transforms/responses/block';
import { validateGetBlocksResponse } from './validators/public_api';

/**
 * A service for making Magento GraphQL queries for contents.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoContentService implements DaffContentServiceInterface {
  constructor(
    private apollo: Apollo,
  ) {}

  getBlocks(...blockIds: DaffContentBlock['id'][]) {
    return this.apollo.query<MagentoGetBlocksResponse>({
      query: getCmsBlocks,
      variables: {
        ids: blockIds,
      },
    }).pipe(
      map(validateGetBlocksResponse),
      map(result => daffContentBlockArrayToCollection(result.data.cmsBlocks.items.map(magentoContentBlockTransform))),
      catchError(err => throwError(() => transformMagentoContentError(err))),
    );
  }
}
