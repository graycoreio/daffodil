import { DaffCategory } from '../../models/category';

export interface CategoryReducerState {
  category: DaffCategory,
  loading: boolean,
  errors: string[]
}
