import { categoryReducers } from "./category-reducers";
import { CategoryReducer } from "./category/category.reducer";

describe('selectCategoryState', () => {

  it('should return a reducer map with CategoryReducer', () => {
    expect(categoryReducers.category).toEqual(CategoryReducer.reducer);
  });
});
