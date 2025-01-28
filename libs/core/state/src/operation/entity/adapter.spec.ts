import { TestBed } from '@angular/core/testing';

import { DaffIdentifiable } from '@daffodil/core';
import {
  DaffOperationEntityState,
  DaffState,
  DaffStateError,
  DaffOperationEntityStateAdapter,
} from '@daffodil/core/state';
import { DaffIdentifiableFactory } from '@daffodil/core/testing';

import { daffCreateOperationEntityStateAdapter } from './adapter';

describe('@daffodil/core/state | daffCreateOperationEntityStateAdapter', () => {
  let factory: DaffIdentifiableFactory;
  let entities: DaffIdentifiable[];
  let entity: DaffIdentifiable;
  let adapter: DaffOperationEntityStateAdapter;
  let state: DaffOperationEntityState;
  let result: DaffOperationEntityState;

  beforeEach(() => {
    factory = TestBed.inject(DaffIdentifiableFactory);

    entities = factory.createMany(3);
    entity = entities[0];

    adapter = daffCreateOperationEntityStateAdapter();
    state = adapter.getInitialState();
  });

  describe('list', () => {
    beforeEach(() => {
      result = adapter.list(entities, state);
    });

    it('should set the list of entities and set stable operation state', () => {
      expect(result.ids).toEqual(jasmine.arrayContaining(entities.map(({ id }) => id)));
      Object.values(result.entities).forEach(e => {
        expect(e.daffErrors).toEqual([]);
        expect(e.daffState).toEqual(DaffState.Stable);
        expect(e.daffTemp).toBeFalse();
      });
    });
  });

  describe('preload', () => {
    describe('when the entity exists in state', () => {
      beforeEach(() => {
        result = adapter.preload(entity.id, adapter.list(entities, state));
      });

      it('should set resolving operation state on the existing entity', () => {
        expect(result.entities[entity.id].daffErrors).toEqual([]);
        expect(result.entities[entity.id].daffState).toEqual(DaffState.Resolving);
        expect(result.entities[entity.id].daffTemp).toBeFalse();
      });
    });

    describe('when the entity does not exist in state', () => {
      beforeEach(() => {
        result = adapter.preload(entity.id, state);
      });

      it('should set resolving operation state on a placeholder', () => {
        expect(result.entities[entity.id].daffErrors).toEqual([]);
        expect(result.entities[entity.id].daffState).toEqual(DaffState.Resolving);
        expect(result.entities[entity.id].daffTemp).toBeTrue();
      });
    });
  });

  describe('load', () => {
    beforeEach(() => {
      result = adapter.load(entity, state);
    });

    it('should set stable operation state on the entity', () => {
      expect(result.entities[entity.id].daffErrors).toEqual([]);
      expect(result.entities[entity.id].daffState).toEqual(DaffState.Stable);
      expect(result.entities[entity.id].daffTemp).toBeFalse();
    });
  });

  describe('preadd', () => {
    let placeholderId: string;

    beforeEach(() => {
      placeholderId = 'placeholderId';
      result = adapter.preadd(entity, state, placeholderId);
    });

    it('should add the placeholder entity to state', () => {
      expect(result.entities[placeholderId].daffErrors).toEqual([]);
      expect(result.entities[placeholderId].daffState).toEqual(DaffState.Adding);
      expect(result.entities[placeholderId].daffTemp).toBeTrue();
    });

    describe('when the operation fails and another preadd is initiated', () => {
      let errors: DaffStateError[];

      beforeEach(() => {
        errors = [
          { code: 'code', message: 'message' },
        ];
        result = adapter.preadd(entity, adapter.operationFailed(placeholderId, errors, result), placeholderId);
      });

      it('should reset errors', () => {
        expect(result.entities[placeholderId].daffErrors).toEqual([]);
      });

      it('should change state to adding', () => {
        expect(result.entities[placeholderId].daffState).toEqual(DaffState.Adding);
      });
    });
  });

  describe('add', () => {
    let placeholderId: string;

    beforeEach(() => {
      placeholderId = 'placeholderId';
      result = adapter.add(entity, adapter.preadd(entity, state, placeholderId), placeholderId);
    });

    it('should add the entity to state', () => {
      expect(result.entities[entity.id].daffErrors).toEqual([]);
      expect(result.entities[entity.id].daffState).toEqual(DaffState.Added);
      expect(result.entities[entity.id].daffTemp).toBeFalse();
    });

    it('should remove the placeholder from state', () => {
      expect(result.entities[placeholderId]).toBeFalsy();
    });
  });

  describe('preupdate', () => {
    beforeEach(() => {
      result = adapter.preupdate(entity, adapter.list(entities, state));
    });

    it('should set mutating operation state on the entity', () => {
      expect(result.entities[entity.id].daffErrors).toEqual([]);
      expect(result.entities[entity.id].daffState).toEqual(DaffState.Updating);
      expect(result.entities[entity.id].daffTemp).toBeFalse();
    });
  });

  describe('update', () => {
    beforeEach(() => {
      result = adapter.update(entity, adapter.list(entities, state));
    });

    it('should set mutated operation state on the entity', () => {
      expect(result.entities[entity.id].daffErrors).toEqual([]);
      expect(result.entities[entity.id].daffState).toEqual(DaffState.Updated);
      expect(result.entities[entity.id].daffTemp).toBeFalse();
    });
  });

  describe('preremove', () => {
    beforeEach(() => {
      result = adapter.preremove(entity.id, adapter.list(entities, state));
    });

    it('should set deleting operation state on the entity', () => {
      expect(result.entities[entity.id].daffErrors).toEqual([]);
      expect(result.entities[entity.id].daffState).toEqual(DaffState.Deleting);
    });
  });

  describe('remove', () => {
    beforeEach(() => {
      result = adapter.remove(entity.id, state);
    });

    it('should remove the entity from state', () => {
      expect(result.entities[entity.id]).toBeFalsy();
    });
  });

  describe('operationFailed', () => {
    let errors: DaffStateError[];

    beforeEach(() => {
      errors = [
        { code: 'code', message: 'message' },
      ];
      result = adapter.operationFailed(entity.id, errors, adapter.list(entities, state));
    });

    describe('when the entity does not exist in state', () => {
      beforeEach(() => {
        result = adapter.operationFailed(`not ${entity.id}`, errors, adapter.list(entities, state));
      });

      it('should not touch state', () => {
        expect(result.entities[`not ${entity.id}`]).toBeUndefined();
      });
    });

    it('should indicate that the entity is in an error state', () => {
      expect(result.entities[entity.id].daffState).toEqual(DaffState.Error);
    });

    it('should should store the errors on the entity', () => {
      expect(result.entities[entity.id].daffErrors).toEqual(errors);
    });
  });

  describe('resetState', () => {
    beforeEach(() => {
      result = adapter.resetState(entity.id, adapter.add(entity, state));
    });

    it('should reset the entity state', () => {
      expect(result.entities[entity.id].daffState).toEqual(DaffState.Stable);
    });

    describe('when the entity to reset does not exist in state', () => {
      beforeEach(() => {
        result = adapter.resetState(entity.id, state);
      });

      it('should not mutate state', () => {
        expect(result).toEqual(state);
      });
    });
  });
});
