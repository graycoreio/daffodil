import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import { DaffCategoryPageMetadata } from '@daffodil/category';
import {
  DaffModelFactory,
  DaffNumericallyPaginableFactory,
  DaffSortableFactory,
} from '@daffodil/core/testing';
import {
  DaffProductFilterFactory,
  MockProductCollectionMetadata,
} from '@daffodil/product/testing';

export class MockCategoryPageMetadata extends MockProductCollectionMetadata implements DaffCategoryPageMetadata {
  id = faker.datatype.uuid();
}

/**
 * A factory for creating {@link DaffCategoryPageMetadata}.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCategoryPageMetadataFactory extends DaffModelFactory<DaffCategoryPageMetadata>{
  constructor(
    pageInfoFactory: DaffNumericallyPaginableFactory,
    sortFieldsFactory: DaffSortableFactory,
    filterFactory: DaffProductFilterFactory,
  ) {
    super(MockCategoryPageMetadata, pageInfoFactory, sortFieldsFactory, filterFactory);
  }
}
