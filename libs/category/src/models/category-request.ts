import {
  ID,
  DaffLocatable,
} from '@daffodil/core';
import { DaffCollectionRequest } from '@daffodil/core';

import { DaffCategory } from './category';

/**
 * When you request a category page, there's two ways to do so, via URL or via ID.
 */
export enum DaffCategoryRequestKind {
  URL = 'URL',
  // eslint-disable-next-line @typescript-eslint/no-shadow
  ID = 'ID'
}

/**
 * The request used to retrieve a category and its relevant items.
 */
export type DaffCategoryRequest = DaffCategoryIdRequest | DaffCategoryUrlRequest;

/**
 * A request used to retrieve a category by its uid.
 */
export interface DaffCategoryIdRequest extends DaffCollectionRequest {
  id: DaffCategory['id'];
  kind: DaffCategoryRequestKind.ID;
}

/**
 * A request used to retrieve a category by its URL.
 * The qualified URL without domain.
 * e.g. a/path/to/the/category.html
 */
export interface DaffCategoryUrlRequest extends DaffCollectionRequest, DaffLocatable {
  kind: DaffCategoryRequestKind.URL;
};
