import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as faker from '@faker-js/faker/locale/en_US';

import {
  DaffCollection,
  DaffIdentifiable,
} from '@daffodil/core';
import {
  DaffCollectionMetadataFactory,
  DaffModelFactory,
} from '@daffodil/core/testing';

import { MockCollection } from './mock-collection.class';

class MockEntity implements DaffIdentifiable {
  id = faker.datatype.uuid();
  field = faker.random.word();
}

@Injectable()
class EntityFactory extends DaffModelFactory<MockEntity> {
  constructor() {
    super(MockEntity);
  }
}

@Injectable()
class TestFactory extends DaffModelFactory<MockCollection<MockEntity>> {
  constructor(
    itemFactory: EntityFactory,
    metadataFactory: DaffCollectionMetadataFactory,
  ) {
    super(MockCollection, itemFactory, metadataFactory);
  }
}

describe('@daffodil/core/testing | MockCollection', () => {
  let factory: TestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EntityFactory,
        TestFactory,
      ],
    });

    factory = TestBed.inject(TestFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffCollection<MockEntity>;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a DaffCollection with all required fields defined', () => {
      expect(result.data).toBeDefined();
      expect(result.metadata).toBeDefined();
    });

    it('should set count to the number of generated items', () => {
      expect(result.metadata.count).toEqual(Object.values(result.data).length);
    });

    it('should set IDs from the generated items', () => {
      expect(result.metadata.ids).toEqual(jasmine.arrayContaining(Object.values(result.data).map(({ id }) => id)));
    });
  });
});
