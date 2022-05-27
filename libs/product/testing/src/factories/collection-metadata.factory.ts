import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffNumericallyPaginable,
  DaffSortable,
  Dict,
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

  total_products = faker.datatype.number({ min: 1, max: 10 });

  current_page = this._pageInfo.current_page;
  total_pages = this._pageInfo.total_pages;
  page_size = this._pageInfo.page_size;

  applied_sort_direction = this._sortFields.applied_sort_direction;
  applied_sort_option = this._sortFields.applied_sort_option;
  sort_options = this._sortFields.sort_options;

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

  private createFilters(): Dict<DaffProductFilter> {
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
