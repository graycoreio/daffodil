import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { throwError } from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

import { DaffContentPage } from '@daffodil/content';
import { DaffContentPageServiceInterface } from '@daffodil/content/driver';
import {
  daffUriTruncateFileExtension,
  daffUriTruncateQueryFragment,
} from '@daffodil/core/routing';

import { transformMagentoContentError } from './errors/transform';
import { getCmsPage } from './queries/public_api';
import { magentoContentPageTransform } from './transforms/responses/page';
import { validateMagentoContentGetPageResponse } from './validators/public_api';

/**
 * A service for making Magento GraphQL queries for CMS pages.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoContentPageService implements DaffContentPageServiceInterface {
  constructor(
    private apollo: Apollo,
  ) {}

  get(id: DaffContentPage['id']) {
    return this.apollo.query({
      query: getCmsPage(),
      variables: {
        url: daffUriTruncateQueryFragment(daffUriTruncateFileExtension(id)),
      },
    }).pipe(
      map(validateMagentoContentGetPageResponse),
      map(result => magentoContentPageTransform(result.data.route)),
      catchError(err => throwError(() => transformMagentoContentError(err))),
    );
  }
}
