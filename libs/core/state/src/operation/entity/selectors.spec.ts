import { TestBed } from '@angular/core/testing';
import { createEntityAdapter } from '@ngrx/entity';
import {
  createFeatureSelector,
  select,
  Store,
  StoreModule,
} from '@ngrx/store';
import {
  MockStore,
  provideMockStore,
} from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { DaffIdentifiable } from '@daffodil/core';
import {
  daffCompleteOperation,
  daffOperationFailed,
  daffOperationInitialState,
  DaffOperationEntityState,
  daffStartMutation,
  daffStartResolution,
  DaffState,
  DaffStateError,
  DaffOperationEntity,
  DaffOperationEntityStateAdapter,
  daffCreateOperationEntityStateAdapter,
  daffOperationEntityCreateFakeId,
} from '@daffodil/core/state';
import { DaffIdentifiableFactory } from '@daffodil/core/testing';

import { daffOperationEntityStateSelectorFactory } from './selectors';

interface TestState {
  test: DaffOperationEntityState;
}

const entityAdapter = createEntityAdapter<DaffOperationEntity>();

const selectState = createFeatureSelector<DaffOperationEntityState>('test');
const {
  selectEntity,
  selectOptimisticList,
} = daffOperationEntityStateSelectorFactory(entityAdapter.getSelectors(selectState));

describe('@daffodil/core/state | daffOperationEntityStateSelectorFactory', () => {
  let factory: DaffIdentifiableFactory;
  let entities: DaffIdentifiable[];
  let entity: DaffIdentifiable;
  let store: MockStore<TestState>;
  let error: DaffStateError;
  let adapter: DaffOperationEntityStateAdapter;

  beforeEach(() => {
    adapter = daffCreateOperationEntityStateAdapter(entityAdapter);

    TestBed.configureTestingModule({
      providers: [
        provideMockStore<TestState>({
          initialState: {
            test: adapter.getInitialState(),
          },
        }),
      ],
    });

    store = TestBed.inject(MockStore);
    factory = TestBed.inject(DaffIdentifiableFactory);

    entities = factory.createMany(3);
    entity = entities[0];
    error = { code: 'code', message: 'message' };

    store.setState({
      test: adapter.list(entities, adapter.getInitialState()),
    });
  });

  describe('selectEntity', () => {
    let result: Observable<DaffIdentifiable>;

    beforeEach(() => {
      result = store.pipe(select(selectEntity(entity.id)));
    });

    it('should return the specified entity', () => {
      const expected = hot('a', { a: jasmine.objectContaining(entity) });
      expect(result).toBeObservable(expected);
    });
  });

  describe('selectOptimisticList', () => {
    let result: Observable<DaffIdentifiable[]>;

    describe('when there is a placeholder entity', () => {
      let placeholderId: string;

      beforeEach(() => {
        placeholderId = daffOperationEntityCreateFakeId('test');
      });

      describe('and that entity does not have errors', () => {
        beforeEach(() => {
          store.setState({
            test: adapter.preadd(
              { id: placeholderId },
              adapter.list(entities, adapter.getInitialState()),
              placeholderId,
            ),
          });
          result = store.pipe(select(selectOptimisticList));
        });

        it('should include the specified entity', (done) => {
          result.subscribe(e => {
            expect(e).toContain(jasmine.objectContaining({ id: placeholderId }));
            done();
          });
        });

        it('should return the rest of the entities', () => {
          const expected = hot('a', { a: jasmine.arrayContaining(entities.map(e => jasmine.objectContaining(e))) });
          expect(result).toBeObservable(expected);
        });
      });

      describe('and that entity has errors', () => {
        beforeEach(() => {
          store.setState({
            test: adapter.operationFailed(
              placeholderId,
              [error],
              adapter.preadd(
                { id: placeholderId },
                adapter.list(entities, adapter.getInitialState()),
                placeholderId,
              ),
            ),
          });
          result = store.pipe(select(selectOptimisticList));
        });

        it('should not include the specified entity', (done) => {
          result.subscribe(e => {
            expect(e).not.toContain(jasmine.objectContaining({ id: placeholderId }));
            done();
          });
        });

        it('should return the rest of the entities', () => {
          const expected = hot('a', { a: jasmine.arrayContaining(entities.map(e => jasmine.objectContaining(e))) });
          expect(result).toBeObservable(expected);
        });
      });
    });
  });
});
