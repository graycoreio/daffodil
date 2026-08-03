import { TestBed } from '@angular/core/testing';
import {
  ActionReducer,
  MetaReducer,
  StoreConfig,
  StoreModule,
} from '@ngrx/store';

import { daffComposeReducers } from './compose';
import { createInjectableReducersTokens } from './injectable-reducers.factory';
import { InjectableReducersTokens } from './injectable-reducers.type';

interface State {
  test: string;
}

describe('@daffodil/core/state | createInjectableReducersTokens', () => {
  let metaReducers: Array<MetaReducer<State>>;
  let config: StoreConfig<State>;
  let tokens: InjectableReducersTokens<State>;
  let reducers: ActionReducer<State>;
  let extraReducer: ActionReducer<State>;
  let reducer: ActionReducer<State>;
  let result: State;

  beforeEach(() => {
    const initialState: State = {
      test: 'test',
    };
    extraReducer = (state, action) => ({
      ...state,
      test: `${state?.test} extra`,
    });
    metaReducers = [
      r => r,
      r => r,
    ];
    reducers = daffComposeReducers([
      (state = initialState, action) => state,
      (state = initialState, action) => state,
    ]);
    tokens = createInjectableReducersTokens<State>('TEST', () => reducers);

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(),
        StoreModule.forFeature('test', tokens.reducers.token, tokens.config.token),
      ],
      providers: [
        ...tokens.meta.provider(...metaReducers),
        ...tokens.extra.provider(extraReducer),
      ],
    });

    reducer = TestBed.inject(tokens.reducers.token);
    config = TestBed.inject(tokens.config.token);
    result = reducer(initialState, { type: '' });
  });

  it('should return the meta-reducers', () => {
    expect(TestBed.inject(tokens.config.token).metaReducers).toEqual(jasmine.arrayContaining(metaReducers));
  });

  it('should run the extra reducer after the daffodil reducers', () => {
    expect(result.test).toEqual('test extra');
  });

  it('should provide the extra reducers to the token', () => {
    expect(TestBed.inject(tokens.extra.token)).toContain(extraReducer);
  });

  it('should provide the meta-reducers to the token', () => {
    metaReducers.forEach(metaReducer => {
      expect(TestBed.inject(tokens.meta.token)).toContain(metaReducer);
    });
  });
});
