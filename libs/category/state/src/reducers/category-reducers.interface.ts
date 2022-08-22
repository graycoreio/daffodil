import { EntityState } from '@ngrx/entity';

import {
  DaffGenericCategory,
  DaffCategory,
} from '@daffodil/category';
import { DaffProduct } from '@daffodil/product';
import { DaffProductStateRootSlice } from '@daffodil/product/state';

import { DAFF_CATEGORY_STORE_FEATURE_KEY } from './category-store-feature-key';
import { DaffCategoryReducerState } from './category/category-reducer-state.interface';
import { DaffCategoryPageMetadataReducerState } from './page-metadata/state.interface';

/**
 * An interface to describe all of category state.
 */
export interface DaffCategoryReducersState<
  V extends DaffGenericCategory<V> = DaffCategory
> {
  /**
   * Redux state for category page metadata, category loading state, and errors associated with loading a category.
   */
  category: DaffCategoryReducerState;
  /**
   * Redux state for category entities.
   */
  categoryEntities: EntityState<V>;
  /**
   * The product collection metadata for the category page.
   */
  pageMetadata: DaffCategoryPageMetadataReducerState;
}

export interface DaffCategoryStateRootSlice<
  V extends DaffGenericCategory<V> = DaffCategory,
  W extends DaffProduct = DaffProduct,
> extends DaffProductStateRootSlice<W> {
  [DAFF_CATEGORY_STORE_FEATURE_KEY]: DaffCategoryReducersState<V>;
}
