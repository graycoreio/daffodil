import { TestBed } from '@angular/core/testing';

import { DaffContentPage } from '@daffodil/content';
import { MagentoCmsPage } from '@daffodil/content/driver/magento';
import { MagentoCmsPageFactory } from '@daffodil/content/driver/magento/testing';

import { magentoContentPageTransform } from './page';

describe('@daffodil/content/driver/magento | magentoContentPageTransform', () => {
  let blockFactory: MagentoCmsPageFactory;

  let mockMagentoPage: MagentoCmsPage;

  beforeEach(() => {
    blockFactory = TestBed.inject(MagentoCmsPageFactory);

    mockMagentoPage = blockFactory.create();
  });

  describe('magentoContentPageTransform | transforming a magento content into a daff content', () => {
    let result: DaffContentPage;

    beforeEach(() => {
      result = magentoContentPageTransform(mockMagentoPage);
    });

    it('should return an object with the correct values', () => {
      expect(result.id).toEqual(mockMagentoPage.identifier);
      expect(result.title).toEqual(mockMagentoPage.title);
      expect(result.htmlContent).toEqual(mockMagentoPage.content);
      expect(result.metaTitle).toEqual(mockMagentoPage.meta_title);
      expect(result.metaDescription).toEqual(mockMagentoPage.meta_description);
    });
  });
});
