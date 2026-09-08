import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeServiceInterface } from '@daffodil/product/driver';

import { MagentoAttributesList } from './models/public_api';
import {
  getAttributesList,
  magentoAttributesListValidator,
} from './queries/public_api';
import { DaffMagentoCustomAttributeTransformer } from './transforms/public_api';

/**
 * A service for making magento apollo queries for the list of {@link DaffProductCustomAttribute}s.
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

  list(): Observable<DaffProductCustomAttribute[]> {
    return this.apollo.query<{ attributesList: MagentoAttributesList }>({
      query: getAttributesList(),
    }).pipe(
      map(magentoAttributesListValidator),
      map(result => this.customAttributeTransformer.transformManyMagentoAttributes(result.data.attributesList.items)),
    );
  }
}
