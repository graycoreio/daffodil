import { TestBed } from '@angular/core/testing';

import { DaffNavigationTree } from '@daffodil/navigation';
import { CategoryNode } from '@daffodil/navigation/driver/magento';

import { DaffMagentoNavigationTransformerService } from './navigation-transformer';

describe('Driver | Magento | Navigation | Transformers | DaffMagentoNavigationTransformerService', () => {
  let service: DaffMagentoNavigationTransformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoNavigationTransformerService
      ]
    })
    service = TestBed.inject(DaffMagentoNavigationTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform a CategoryNode into a DaffNavigationTree', () => {
    const categoryNode: CategoryNode = {
      id: 1,
      name: 'Root Category',
      include_in_menu: true,
      product_count: 10,
      children_count: 0,
      children: [{
        id: 2,
        include_in_menu: false,
        name: 'Subcategory',
        product_count: 10,
        children_count: 0,
				children: [],
				breadcrumbs: [{
					category_id: 1,
					category_level: 1,
					category_name: 'name',
					category_url_key: 'url'
				}]
			}],
			breadcrumbs: []
    }

    const navigation: DaffNavigationTree = {
      id: '1',
      name: 'Root Category',
      path: '1',
      total_products: 10,
      children: [],
			children_count: 0,
			breadcrumbs: []
    }

    expect(service.transform(categoryNode)).toEqual(navigation);
  });

  it('should filter out categories (and necessarily their children) that are include_in_menu false', () => {
    const categoryNode: CategoryNode = {
      id: 1,
      name: 'Root Category',
      include_in_menu: true,
      product_count: 10,
      children_count: 1,
      children: [{
        id: 2,
        include_in_menu: true,
        name: 'Subcategory',
        product_count: 10,
        children_count: 0,
				children: [],
				breadcrumbs: [{
					category_id: 1,
					category_level: 1,
					category_name: 'name',
					category_url_key: 'url'
				}]
			}],
			breadcrumbs: []
    };

    const navigation: DaffNavigationTree = {
      id: '1',
      name: 'Root Category',
      path: '1',
      total_products: 10,
      children: [{
        id: '2',
        name: 'Subcategory',
        path: '2',
        total_products: 10,
        children: [],
				children_count: 0,
				breadcrumbs: [{
					categoryId: '1',
					categoryLevel: 1,
					categoryName: 'name',
					categoryUrlKey: 'url'
				}]
      }],
			children_count: 1,
			breadcrumbs: []
    }

    expect(service.transform(categoryNode)).toEqual(navigation);
  })

});
