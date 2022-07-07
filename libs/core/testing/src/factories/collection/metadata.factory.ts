import { Injectable } from '@angular/core';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffCollectionMetadata,
  DaffIdentifiable,
  DaffNumericallyPaginable,
  DaffSortable,
  DaffSortDirectionEnum,
  DaffSortOption,
  DaffSortOptions,
} from '@daffodil/core';

import { DaffModelFactory } from '../factory';
import { DaffNumericallyPaginableFactory } from './numerically-paginable.factory';
import { DaffSortableFactory } from './sortable.factory';

/**
 * Mocked {@link DaffCollectionMetadata} object.
 */
export class MockCollectionMetadata implements DaffCollectionMetadata {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  sortOptions: DaffSortOptions;
  appliedSortOption: DaffSortOption['value'];
  appliedSortDirection: DaffSortDirectionEnum;
  count: number;
  ids: DaffIdentifiable['id'][];

  constructor(
    pageInfoFactory: DaffNumericallyPaginableFactory,
    sortFieldsFactory: DaffSortableFactory,
  ) {
    const _pageInfo = pageInfoFactory.create();
    const _sortFields = sortFieldsFactory.create();

    this.count = faker.datatype.number({ min: 1, max: 1000 });
    this.ids = new Array(this.count).fill(null).map<string>(() => faker.datatype.uuid());

    this.currentPage = _pageInfo.currentPage;
    this.totalPages = _pageInfo.totalPages;
    this.pageSize = _pageInfo.pageSize;

    this.appliedSortDirection = _sortFields.appliedSortDirection;
    this.appliedSortOption = _sortFields.appliedSortOption;
    this.sortOptions = _sortFields.sortOptions;
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
