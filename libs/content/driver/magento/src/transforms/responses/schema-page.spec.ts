import { TestBed } from '@angular/core/testing';

import { DaffContentSchemaPage } from '@daffodil/content';
import { MagentoCmsPage } from '@daffodil/content/driver/magento';
import { MagentoCmsPageFactory } from '@daffodil/content/driver/magento/testing';

import { magentoContentSchemaPageTransform } from './schema-page';

describe('@daffodil/content/driver/magento | magentoContentSchemaPageTransform', () => {
  let pageFactory: MagentoCmsPageFactory;

  let mockMagentoPage: MagentoCmsPage;

  beforeEach(() => {
    pageFactory = TestBed.inject(MagentoCmsPageFactory);

    mockMagentoPage = pageFactory.create();
  });

  describe('magentoContentSchemaPageTransform | transforming a magento content into a daff content schema page', () => {
    let result: DaffContentSchemaPage;

    beforeEach(() => {
      result = magentoContentSchemaPageTransform(mockMagentoPage);
    });

    it('should return an object with the correct values', () => {
      expect(result.id).toEqual(mockMagentoPage.identifier);
      expect(result.title).toEqual(mockMagentoPage.title);
      expect(result.schema).toEqual(JSON.parse(mockMagentoPage.content_schema_json));
      expect(result.metaTitle).toEqual(mockMagentoPage.meta_title);
      expect(result.metaDescription).toEqual(mockMagentoPage.meta_description);
    });
  });
});
