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
      let newField: string;

      beforeEach(() => {
        newField = 'newfield';
        result = factory.create({
          field: newField,
        });
      });

      it('should preferentially set fields from the partial', () => {
        expect(result.field).toEqual(newField);
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
