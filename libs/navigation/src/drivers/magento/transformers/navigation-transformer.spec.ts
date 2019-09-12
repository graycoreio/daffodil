import { DaffNavigationTreeFactory } from '@daffodil/navigation/testing';
import { TestBed } from '@angular/core/testing';

import { CategoryNode } from '../interfaces/category-node';
import { DaffMagentoNavigationTransformerService } from './navigation-transformer';

describe('Driver | Magento | Navigation | Transformers | DaffMagentoNavigationTransformerService', () => {
  const navigationTreeFactory: DaffNavigationTreeFactory = new DaffNavigationTreeFactory();
  let service: DaffMagentoNavigationTransformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoNavigationTransformerService
      ]
    })
    service = TestBed.get(DaffMagentoNavigationTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

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

    expect(service.transform(categoryNode)).toEqual(navigation);
  });
});
