import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { DaffModelFactory } from './factory';

class TestMockModel {
  field: string;

  constructor(
    field: string,
  ) {
    this.field = field;
  }
}

interface TestExtension extends TestMockModel {
  someNewField: number;
}


@Injectable({
  providedIn: 'root',
})
class TestFactory extends DaffModelFactory<TestMockModel> {
  constructor() {
    super(TestMockModel, 'field');
  }
}

@Injectable({
  providedIn: 'root',
})
class TestFactoryNoType extends DaffModelFactory<TestMockModel> {
  constructor() {
    super();
  }
}

describe('@daffodil/core/testing | DaffModelFactory', () => {
  let factory: DaffModelFactory<TestMockModel>;

  beforeEach(() => {
    factory = TestBed.inject(TestFactory);
  });

  describe('create', () => {
    let result: TestMockModel;

    beforeEach(() => {
      result = factory.create();
    });

    it('should pass args to the TestMockModel constructor', () => {
      expect(result.field).toEqual('field');
    });

    describe('when a partial is passed', () => {
      let extension: TestExtension;
      let newField: string;

      beforeEach(() => {
        newField = 'newfield';
        extension = factory.create({
          field: newField,
          someNewField: 5,
        });
      });

      it('should preferentially set fields from the partial', () => {
        expect(extension.field).toEqual(newField);
      });

      it('should allow new fields to be added', () => {
        expect(extension.someNewField).toEqual(5);
      });
    });

    describe('when not type was passed', () => {
      beforeEach(() => {
        factory = TestBed.inject(TestFactoryNoType);
      });

      it('should throw an error', () => {
        expect(() => factory.create()).toThrowError('`type` is required if `create` is not overriden.');
      });
    });
  });
});
