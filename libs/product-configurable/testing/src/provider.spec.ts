import { TestBed } from '@angular/core/testing';

import { DaffProductTypeEnum } from '@daffodil/product';
import { DaffProductKindFactory } from '@daffodil/product/testing';

import { provideDaffProductConfigurableTesting } from './provider';

describe('@daffodil/product-configurable/testing | provideDaffProductConfigurableTesting', () => {
  it('should make the product kind factory create configurable products', () => {
    TestBed.configureTestingModule({
      providers: [
        provideDaffProductConfigurableTesting(),
      ],
    });

    expect(TestBed.inject(DaffProductKindFactory).create().type).toEqual(DaffProductTypeEnum.Configurable);
  });
});
