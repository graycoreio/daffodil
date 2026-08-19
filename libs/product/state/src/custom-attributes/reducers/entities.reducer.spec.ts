import { TestBed } from '@angular/core/testing';

import { DaffProductCustomAttribute } from '@daffodil/product';
import { DaffProductCustomAttributeFactory } from '@daffodil/product/testing';

import {
  daffProductCustomAttributesEntitiesAdapter,
  daffProductCustomAttributesEntitiesReducer,
} from './entities.reducer';
import { DaffProductCustomAttributesListSuccess } from '../actions';

describe('@daffodil/product/state | daffProductCustomAttributesEntitiesReducer', () => {
  let customAttributeFactory: DaffProductCustomAttributeFactory;
  const initialState = daffProductCustomAttributesEntitiesAdapter().getInitialState();

  beforeEach(() => {
    customAttributeFactory = TestBed.inject(DaffProductCustomAttributeFactory);
  });

  describe('when an unknown action is triggered', () => {
    it('should return the current state', () => {
      const action = <any>{};

      const result = daffProductCustomAttributesEntitiesReducer(initialState, action);

      expect(result).toEqual(initialState);
    });
  });

  describe('when ListSuccess is triggered', () => {
    let customAttributes: DaffProductCustomAttribute[];
    let result;

    beforeEach(() => {
      customAttributes = customAttributeFactory.createMany(2);
      const listSuccess = new DaffProductCustomAttributesListSuccess(customAttributes);

      result = daffProductCustomAttributesEntitiesReducer(initialState, listSuccess);
    });

    it('sets expected number of custom attributes on state', () => {
      expect(result.ids.length).toEqual(customAttributes.length);
    });

    it('sets expected custom attribute on state', () => {
      expect(result.entities[customAttributes[0].id]).toEqual(customAttributes[0]);
    });
  });
});
