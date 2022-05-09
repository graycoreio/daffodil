import { TestBed } from '@angular/core/testing';

import { DaffContentBlock } from '@daffodil/content';
import { MagentoContentBlock } from '@daffodil/content/driver/magento';
import { MagentoContentBlockFactory } from '@daffodil/content/driver/magento/testing';

import { magentoContentBlockTransform } from './block';

describe('@daffodil/content/driver/magento | magentoContentBlockTransform', () => {
  let blockFactory: MagentoContentBlockFactory;

  let mockMagentoBlock: MagentoContentBlock;

  beforeEach(() => {
    blockFactory = TestBed.inject(MagentoContentBlockFactory);

    mockMagentoBlock = blockFactory.create();
  });

  describe('magentoContentBlockTransform | transforming a magento content into a daff content', () => {
    let result: DaffContentBlock;

    beforeEach(() => {
      result = magentoContentBlockTransform(mockMagentoBlock);
    });

    it('should return an object with the correct values', () => {
      expect(result.id).toEqual(mockMagentoBlock.identifier);
      expect(result.title).toEqual(mockMagentoBlock.title);
      expect(result.content).toEqual(mockMagentoBlock.content);
    });
  });
});
