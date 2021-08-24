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

@Injectable()
class TestFactory extends DaffModelFactory<TestMockModel> {
  constructor() {
    super(TestMockModel, 'field');
  }
}

describe('@daffodil/core/testing | DaffModelFactory', () => {
  let factory: TestFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TestFactory,
      ],
    });

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
  });
});
