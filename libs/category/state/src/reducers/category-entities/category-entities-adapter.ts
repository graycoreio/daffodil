import {
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import {
  DaffGenericCategory,
  DaffCategory,
} from '@daffodil/category';

export function daffCategoryEntitiesAdapter<T extends DaffGenericCategory<T> = DaffCategory>(): EntityAdapter<T> {
  return createEntityAdapter<T>();
}
