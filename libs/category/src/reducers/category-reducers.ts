import { ActionReducerMap } from "@ngrx/store";

import { CategoryReducersState } from "./category-reducers.interface";
import { reducer } from "./category/category.reducer";

export const categoryReducers: ActionReducerMap<CategoryReducersState> = {
  category: reducer
}