import { TestBed } from '@angular/core/testing';

import {
  DaffCompositeProductItem,
  DaffCompositeProductItemOption,
  DaffProductCompositeSelectionPayload,
} from '@daffodil/product-composite';
import { DaffCompositeProductItemOptionFactory } from '@daffodil/product-composite/testing';

import { daffProductCompositeBuildSelectionPayload } from './build-selection-payload';

describe('@daffodil/product-composite | daffProductCompositeBuildSelectionPayload', () => {
  let appliedOptions: Record<DaffCompositeProductItem['id'], DaffCompositeProductItemOption>;
  let optionFactory: DaffCompositeProductItemOptionFactory;
  let result: DaffProductCompositeSelectionPayload;

  beforeEach(() => {
    optionFactory = TestBed.inject(DaffCompositeProductItemOptionFactory);

    appliedOptions = {
      itemId: optionFactory.create(),
      itemId2: optionFactory.create(),
    };
    result = daffProductCompositeBuildSelectionPayload(appliedOptions);
  });

  it('should set the item to the array of option IDs', () => {
    expect(result.itemId).toEqual([appliedOptions.itemId.id]);
    expect(result.itemId2).toEqual([appliedOptions.itemId2.id]);
  });
});
