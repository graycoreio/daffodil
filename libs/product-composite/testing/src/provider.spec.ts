import { TestBed } from '@angular/core/testing';

import { DaffProductTypeEnum } from '@daffodil/product';
import { DaffProductKindFactory } from '@daffodil/product/testing';

import { provideDaffProductCompositeTesting } from './provider';

describe('@daffodil/product-composite/testing | provideDaffProductCompositeTesting', () => {
  it('should make the product kind factory create composite products', () => {
    TestBed.configureTestingModule({
      providers: [
        provideDaffProductCompositeTesting(),
      ],
    });

    expect(TestBed.inject(DaffProductKindFactory).create().type).toEqual(DaffProductTypeEnum.Composite);
  });
});
