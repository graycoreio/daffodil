import { TestBed } from '@angular/core/testing';

import { DaffNavigationTree } from '@daffodil/navigation';
import {
  CategoryNode,
  magentoProvideNavigationTreeTransforms,
} from '@daffodil/navigation/driver/magento';

import { DaffMagentoNavigationTransformerService } from './navigation-transformer';

describe('@daffodil/navigation/driver/magento | DaffMagentoNavigationTransformerService', () => {
  let service: DaffMagentoNavigationTransformerService;
  let categoryNode: CategoryNode;
  let expectedNavigation: DaffNavigationTree;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoNavigationTransformerService,
        magentoProvideNavigationTreeTransforms((daffTree, magentoTree) => ({
          ...daffTree,
          id: magentoTree.name === 'Root Category' ? 'injectedTransformId' : daffTree.id,
        })),
      ],
    });
    service = TestBed.inject(DaffMagentoNavigationTransformerService);

    categoryNode = {
      uid: '1',
      url_path: '1',
      url_suffix: '.html',
      name: 'Root Category',
      include_in_menu: true,
      product_count: 10,
      position: 1,
      children_count: 0,
      children: [
        {
          uid: '2',
          url_path: '2',
          url_suffix: '.html',
          include_in_menu: true,
          name: 'Subcategory',
          product_count: 10,
          children_count: 0,
          children: [],
          position: 2,
          breadcrumbs: [
            {
              category_uid: '2',
              category_level: 2,
              category_name: 'name2',
              category_url_path: 'url2',
            },
            {
              category_uid: '1',
              category_level: 1,
              category_name: 'name',
              category_url_path: 'url',
            },
          ],
        },
        {
          uid: '3',
          url_path: '3',
          url_suffix: '.html',
          include_in_menu: false,
          name: 'Subcategory',
          product_count: 10,
          children_count: 0,
          position: null,
          children: [],
          breadcrumbs: [],
        },
        {
          uid: '5',
          url_path: '5',
          url_suffix: '.html',
          include_in_menu: true,
          name: 'Subcategory',
          product_count: 10,
          children_count: 0,
          children: [],
          position: 1,
          breadcrumbs: [],
        },
      ],
      breadcrumbs: [],
    };

    expectedNavigation = {
      id: 'injectedTransformId',
      url: '/1.html',
      name: 'Root Category',
      total_products: 10,
      children: [
        {
          id: '5',
          url: '/5.html',
          name: 'Subcategory',
          total_products: 10,
          children: [],
          children_count: 0,
          breadcrumbs: [],
        },
        {
          id: '2',
          url: '/2.html',
          name: 'Subcategory',
          total_products: 10,
          children: [],
          children_count: 0,
          breadcrumbs: [
            {
              id: '1',
              level: 1,
              name: 'name',
              url: '/url.html',
            },
            {
              id: '2',
              level: 2,
              name: 'name2',
              url: '/url2.html',
            },
          ],
        },
      ],
      children_count: 0,
      breadcrumbs: [],
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform a CategoryNode into a DaffNavigationTree', () => {
    expect(service.transform(categoryNode)).toEqual(expectedNavigation);
  });

  it('should filter out categories (and necessarily their children) that are include_in_menu false', () => {
    expect(service.transform(categoryNode).children.length).not.toEqual(categoryNode.children.length);
  });

  it('should order the categories by position', () => {
    const categoryResult = service.transform(categoryNode);
    expect(categoryResult.children[0].id).toEqual(categoryNode.children[2].uid.toString());
    expect(categoryResult.children[1].id).toEqual(categoryNode.children[0].uid.toString());
  });

  it('should order the breadcrumbs by level', () => {
    const breadcrumbsResult = service.transform(categoryNode).children[1].breadcrumbs;
    expect(breadcrumbsResult[0].level).toBeLessThan(breadcrumbsResult[1].level);
  });

  it('should set children to an empty array when magento returns a null children array', () => {
    categoryNode.children = null;
    const categoryResult = service.transform(categoryNode);

    expect(categoryResult.children).toEqual([]);
  });
});
