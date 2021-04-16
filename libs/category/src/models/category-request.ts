import { ID } from '@daffodil/core';
import { DaffSortDirectionEnum } from '@daffodil/core/state';

import { DaffCategoryFilterRequest } from './filters/public_api';

/**
 * When you request a category page, there's two ways to do so, via URI or via ID.
 */
export enum DaffCategoryPageRequestKind {
  URI = 'URI',
  // eslint-disable-next-line @typescript-eslint/no-shadow
  ID = 'ID'
}

/**
 * A model of the request sent to the {@link DaffCategoryServiceInterface} to retrieve information
 * about a category.
 */
export interface DaffCategoryBaseRequest {
  /**
   * The properties by which to filter the items of the category being requested.
   */
  filter_requests?: DaffCategoryFilterRequest[];

  /**
   * The option by which to sort a categories' items.
   */
  applied_sort_option?: string;

  /**
   * The sort direction to sort the categories' items by.
   */
  applied_sort_direction?: DaffSortDirectionEnum;

  /**
   * What page of the categories' items to retrieve.
   */
  current_page?: number;

  /**
   * The number of items per-page to request.
   */
  page_size?: number;
}

/**
 * The request used to retrieve a category and its relevant items.
 */
export type DaffCategoryRequest = DaffCategoryIdRequest | DaffCategoryUriRequest;

/**
 * A request used to retrieve a category by its uid.
 */
export interface DaffCategoryIdRequest extends DaffCategoryBaseRequest {
  id: ID;
  kind: DaffCategoryPageRequestKind.ID;
}

/**
 * A request used to retrieve a category by its URI.
 */
export interface DaffCategoryUriRequest extends DaffCategoryBaseRequest {
  uri: string;
  kind: DaffCategoryPageRequestKind.URI;
};
