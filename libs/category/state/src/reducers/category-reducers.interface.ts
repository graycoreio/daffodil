import { EntityState } from '@ngrx/entity';

import {
  DaffGenericCategory,
  DaffCategory,
} from '@daffodil/category';
import { DaffProduct } from '@daffodil/product';
import { DaffProductStateRootSlice } from '@daffodil/product/state';

import { DAFF_CATEGORY_STORE_FEATURE_KEY } from './category-store-feature-key';
import { DaffCategoryReducerState } from './category/category-reducer-state.interface';

export interface DaffCategoryReducersState<
	V extends DaffGenericCategory<V> = DaffCategory
> {
  category: DaffCategoryReducerState;
  categoryEntities: EntityState<V>;
}

export interface DaffCategoryStateRootSlice<
  V extends DaffGenericCategory<V> = DaffCategory,
  W extends DaffProduct = DaffProduct,
> extends DaffProductStateRootSlice<W> {
  [DAFF_CATEGORY_STORE_FEATURE_KEY]: DaffCategoryReducersState<V>;
}
