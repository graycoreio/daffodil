import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeServiceInterface } from '@daffodil/product/driver';

import { MAGENTO_PRODUCT_ATTRIBUTE_ENTITY_TYPE } from './models/public_api';
import {
  magentoAttributesSearch,
  magentoAttributesSearchValidator,
} from './queries/public_api';
import { DaffMagentoCustomAttributeTransformer } from './transforms/public_api';

/**
 * A service for querying product custom attribute definitions from Magento.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoProductCustomAttributeService implements DaffProductCustomAttributeServiceInterface {
  constructor(
    private apollo: Apollo,
    private customAttributeTransformer: DaffMagentoCustomAttributeTransformer,
  ) {}

  search(ids: Array<DaffProductCustomAttribute['id']>): Observable<DaffProductCustomAttribute[]> {
    return this.apollo.query({
      query: magentoAttributesSearch(),
      variables: {
        attributes: ids.map((id) => ({
          attribute_code: id,
          entity_type: MAGENTO_PRODUCT_ATTRIBUTE_ENTITY_TYPE,
        })),
      },
    }).pipe(
      map(magentoAttributesSearchValidator),
      map(result => result.data.customAttributeMetadataV2.items.map((a) => this.customAttributeTransformer.transformMagentoAttribute(a))),
    );
  }
}
