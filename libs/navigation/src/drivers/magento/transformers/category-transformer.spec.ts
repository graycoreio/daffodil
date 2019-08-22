import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';

import { CategoryNode } from '../interfaces/category-node';
import { DaffMagentoCategoryTransformer } from './category-transformer';

describe('Driver | Magento | Navigation | Transformers | DaffMagentoCategoryTransformer', () => {
  const navigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();

  describe('DaffMagentoCategoryTransformer', () => {

    it('should transform a CategoryNode into a DaffNavigationTree', () => {
      const navigation = navigationTreeFactory.create();

      const categoryNode: CategoryNode = {
        id: navigation.id,
        name: navigation.name,
        products: {
          total_count: navigation.total_products
        },
        children_count: navigation.children_count,
        children: [{
          id: navigation.children[0].id,
          name: navigation.children[0].name,
          products: {
            total_count: navigation.children[0].total_products
          },
          children_count: navigation.children[0].children_count,
          children: []
        }]
      }

      expect(DaffMagentoCategoryTransformer(categoryNode)).toEqual(navigation);
    });
  });
});
