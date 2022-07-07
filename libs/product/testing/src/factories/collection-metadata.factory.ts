import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffNumericallyPaginable,
  DaffSortable,

} from '@daffodil/core';
import {
  DaffModelFactory,
  DaffNumericallyPaginableFactory,
  DaffSortableFactory,
} from '@daffodil/core/testing';
import {
  DaffProductCollectionMetadata,
  DaffProductFilter,
  daffProductFilterArrayToDict,
} from '@daffodil/product';

import { DaffProductFilterFactory } from './filters/public_api';

/**
 * Mocked {@link DaffProductCollectionMetadata} object.
 */
export class MockProductCollectionMetadata implements DaffProductCollectionMetadata {
  _pageInfo = this.createPageInfo();
  _sortFields = this.createSortFields();

  ids = [];
  count = faker.datatype.number({ min: 1, max: 10 });

  currentPage = this._pageInfo.currentPage;
  totalPages = this._pageInfo.totalPages;
  pageSize = this._pageInfo.pageSize;

  appliedSortDirection = this._sortFields.appliedSortDirection;
  appliedSortOption = this._sortFields.appliedSortOption;
  sortOptions = this._sortFields.sortOptions;

  filters = this.createFilters();

  constructor(
    private pageInfoFactory: DaffNumericallyPaginableFactory,
    private sortFieldsFactory: DaffSortableFactory,
    private filterFactory: DaffProductFilterFactory,
  ) {}

  private createPageInfo(): DaffNumericallyPaginable {
    return this.pageInfoFactory.create();
  }

  private createSortFields(): DaffSortable {
    return this.sortFieldsFactory.create();
  }

  private createFilters(): Record<DaffProductFilter['name'], DaffProductFilter> {
    return daffProductFilterArrayToDict(this.filterFactory.createMany(faker.random.number({ min: 1, max: 5 })));
  }
}

/**
 * Factory for creating `DaffProductCollectionMetadata`s.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffProductCollectionMetadataFactory extends DaffModelFactory<DaffProductCollectionMetadata> {
  constructor(
    pageInfoFactory: DaffNumericallyPaginableFactory,
    sortFieldsFactory: DaffSortableFactory,
    filterFactory: DaffProductFilterFactory,
  ) {
    super(MockProductCollectionMetadata, pageInfoFactory, sortFieldsFactory, filterFactory);
  }
}
