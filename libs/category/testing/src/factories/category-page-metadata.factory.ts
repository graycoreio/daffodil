import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

import { DaffCategoryPageMetadata } from '@daffodil/category';
import {
  DaffModelFactory,
  DaffNumericallyPaginableFactory,
  DaffSortableFactory,
} from '@daffodil/core/testing';
import {
  DaffFilterFactory,
  MockCollectionMetadata,
} from '@daffodil/core/testing';

export class MockCategoryPageMetadata extends MockCollectionMetadata implements DaffCategoryPageMetadata {
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
    filterFactory: DaffFilterFactory,
  ) {
    super(MockCategoryPageMetadata, pageInfoFactory, sortFieldsFactory, filterFactory);
  }
}
