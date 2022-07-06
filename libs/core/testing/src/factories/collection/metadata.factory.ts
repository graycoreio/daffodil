import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffCollectionMetadata,
  DaffNumericallyPaginable,
  DaffSortable,
} from '@daffodil/core';

import { DaffModelFactory } from '../factory';
import { DaffNumericallyPaginableFactory } from './numerically-paginable.factory';
import { DaffSortableFactory } from './sortable.factory';

/**
 * Mocked {@link DaffCollectionMetadata} object.
 */
export class MockCollectionMetadata implements DaffCollectionMetadata {
  _pageInfo = this.createPageInfo();
  _sortFields = this.createSortFields();

  count = faker.datatype.number({ min: 1, max: 1000 });
  ids = new Array(this.count).fill(null).map<string>(() => faker.datatype.uuid());

  current_page = this._pageInfo.current_page;
  total_pages = this._pageInfo.total_pages;
  page_size = this._pageInfo.page_size;

  applied_sort_direction = this._sortFields.applied_sort_direction;
  applied_sort_option = this._sortFields.applied_sort_option;
  sort_options = this._sortFields.sort_options;

  constructor(
    private pageInfoFactory: DaffNumericallyPaginableFactory,
    private sortFieldsFactory: DaffSortableFactory,
  ) {}

  private createPageInfo(): DaffNumericallyPaginable {
    return this.pageInfoFactory.create();
  }

  private createSortFields(): DaffSortable {
    return this.sortFieldsFactory.create();
  }
}

/**
 * Factory for creating {@link DaffCollectionMetadata}s.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffCollectionMetadataFactory extends DaffModelFactory<DaffCollectionMetadata> {
  constructor(
    pageInfoFactory: DaffNumericallyPaginableFactory,
    sortFieldsFactory: DaffSortableFactory,
  ) {
    super(MockCollectionMetadata, pageInfoFactory, sortFieldsFactory);
  }
}
