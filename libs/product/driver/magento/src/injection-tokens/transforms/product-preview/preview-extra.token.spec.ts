import { TestBed } from '@angular/core/testing';

import { DaffMagentoProductExtraTransform } from '@daffodil/product/driver/magento';

import {
  daffProvideProductMagentoExtraProductPreviewTransforms,
  DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS,
} from './preview-extra.token';


describe('daffProvideProductMagentoExtraProductPreviewTransforms', () => {
  let transforms: DaffMagentoProductExtraTransform[];
  let result: DaffMagentoProductExtraTransform[];

  beforeEach(() => {
    transforms = [
      () => null,
      () => null,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffProvideProductMagentoExtraProductPreviewTransforms(...transforms),
      ],
    });

    result = TestBed.inject(DAFF_PRODUCT_MAGENTO_EXTRA_PRODUCT_PREVIEW_TRANSFORMS);
  });

  it('should provide the transforms to the token', () => {
    transforms.forEach(fragment => {
      expect(result).toContain(fragment);
    });
  });
});
