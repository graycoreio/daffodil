import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import {
  daffCategoryProvideExtraReducers,
  DaffCategoryReducersState,
  DaffCategoryLoadFailure,
} from '@daffodil/category/state';
import { DaffStateError } from '@daffodil/core/state';

import { DAFF_CATEGORY_REDUCERS } from './reducers.token';
import { daffCategoryInitialState } from '../category/category.reducer';
import { daffCategoryEntitiesAdapter } from '../category-entities/category-entities-adapter';
import { daffCategoryPageMetadataInitialState } from '../page-metadata/reducer';

describe('@daffodil/category/state | daffCategoryProvideExtraReducers', () => {
  let extraError: DaffStateError;

  let extraReducer: ActionReducer<DaffCategoryReducersState>;
  let reducer: ActionReducer<DaffCategoryReducersState>;
  let result: DaffCategoryReducersState;

  beforeEach(() => {
    const initialState: DaffCategoryReducersState = {
      category: {
        ...daffCategoryInitialState,
        daffErrors: [{
          code: 'code',
          message: 'already in state',
        }],
      },
      pageMetadata: daffCategoryPageMetadataInitialState,
      categoryEntities: daffCategoryEntitiesAdapter().getInitialState(),
    };
    extraError = {
      code:  'code',
      message: 'an injected error',
    };
    extraReducer = (state, action) => ({
      ...state,
      category: {
        ...state.category,
        daffErrors: [
          ...state.category.daffErrors,
          extraError,
        ],
      },
    });

    TestBed.configureTestingModule({
      providers: [
        ...daffCategoryProvideExtraReducers(extraReducer),
      ],
    });

    reducer = TestBed.inject(DAFF_CATEGORY_REDUCERS);

    result = reducer(initialState, new DaffCategoryLoadFailure(extraError));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.category.daffErrors[1]).toEqual(extraError);
  });
});
