import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { throwError } from 'rxjs';
import {
  map,
  catchError,
} from 'rxjs/operators';

import { DaffContentSchemaPage } from '@daffodil/content';
import { DaffContentPageSchemaServiceInterface } from '@daffodil/content/driver';
import {
  daffUriTruncateFileExtension,
  daffUriTruncateQueryFragment,
} from '@daffodil/core/routing';

import { transformMagentoContentError } from './errors/transform';
import { getCmsSchemaPage } from './queries/public_api';
import { magentoContentSchemaPageTransform } from './transforms/responses/schema-page';
import { validateMagentoContentGetSchemaPageResponse } from './validators/public_api';

/**
 * A service for making Magento GraphQL queries for CMS pages with schema content.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class MagentoContentPageSchemaService implements DaffContentPageSchemaServiceInterface<DaffContentSchemaPage> {
  constructor(
    private apollo: Apollo,
  ) {}

  get(id: DaffContentSchemaPage['id']) {
    return this.apollo.query({
      query: getCmsSchemaPage(),
      variables: {
        url: daffUriTruncateQueryFragment(daffUriTruncateFileExtension(id)),
      },
    }).pipe(
      map(validateMagentoContentGetSchemaPageResponse),
      map(result => magentoContentSchemaPageTransform(result.data.route)),
      catchError(err => throwError(() => transformMagentoContentError(err))),
    );
  }
}
