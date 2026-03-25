import { TestBed } from '@angular/core/testing';

import { DaffSortDirectionEnum } from '@daffodil/core';
import {
  ShopifyCategory,
  ShopifyProductCollectionSortKeys,
} from '@daffodil/driver/shopify';
import {
  DaffCategoryDriverShopifyCategoryFactory,
  ShopifyProductNodeFactory,
} from '@daffodil/driver/shopify/testing';

import { daffShopifyCategoryTransformer } from './shopify-daff-category-transform';
import { ShopifyCollectionProductVariables } from '../queries/public_api';

describe('@daffodil/category/driver/shopify | daffShopifyCategoryTransformer', () => {
  let mockShopifyCategory: ShopifyCategory;
  let mockVariables: ShopifyCollectionProductVariables;
  let shopifyCategoryFactory: DaffCategoryDriverShopifyCategoryFactory;
  let shopifyProductFactory: ShopifyProductNodeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    shopifyCategoryFactory = TestBed.inject(DaffCategoryDriverShopifyCategoryFactory);
    shopifyProductFactory = TestBed.inject(ShopifyProductNodeFactory);

    mockShopifyCategory = shopifyCategoryFactory.create({
      id: 'gid://shopify/Collection/123',
      handle: 'test-category',
      title: 'Test Category',
      description: 'Test description',
    });

    mockVariables = {
      sortKey: ShopifyProductCollectionSortKeys.CollectionDefault,
      reverse: false,
      filters: [],
      first: 20,
    };
  });

  it('should transform basic category fields', () => {
    const result = daffShopifyCategoryTransformer(mockShopifyCategory, mockVariables);

    expect(result.category.name).toBe('Test Category');
    expect(result.category.description).toBe('Test description');
    expect(result.category.url).toBe('/Collection/test-category');
    expect(result.category.id).toBe('/gid://shopify/Collection/123');
  });

  it('should transform meta fields', () => {
    const result = daffShopifyCategoryTransformer(mockShopifyCategory, mockVariables);

    expect(result.category.meta_title).toBe('Test Category');
    expect(result.category.meta_description).toBe('Test description');
  });

  it('should create breadcrumbs with Store root and category', () => {
    const result = daffShopifyCategoryTransformer(mockShopifyCategory, mockVariables);

    expect(result.category.breadcrumbs.length).toBe(2);
    expect(result.category.breadcrumbs[0]).toEqual({
      id: '/',
      url: '/',
      name: 'Store',
      level: 0,
    });
    expect(result.category.breadcrumbs[1]).toEqual({
      id: '/gid://shopify/Collection/123',
      url: '/Collection/test-category',
      name: 'Test Category',
      level: 1,
    });
  });

  it('should transform products array', () => {
    const mockProduct = shopifyProductFactory.create({
      id: 'gid://shopify/Product/1',
    });
    mockShopifyCategory.products.nodes = [mockProduct];

    const result = daffShopifyCategoryTransformer(mockShopifyCategory, mockVariables);

    expect(result.products.length).toBe(1);
    expect(result.category.product_ids).toEqual(['gid://shopify/Product/1']);
  });

  it('should set pageSize from variables', () => {
    const result = daffShopifyCategoryTransformer(mockShopifyCategory, mockVariables);

    expect(result.categoryPageMetadata.pageSize).toBe(20);
  });

  it('should set applied sort option from variables', () => {
    const result = daffShopifyCategoryTransformer(mockShopifyCategory, mockVariables);

    expect(result.categoryPageMetadata.appliedSortOption).toEqual({
      label: ShopifyProductCollectionSortKeys.CollectionDefault,
      value: ShopifyProductCollectionSortKeys.CollectionDefault,
    });
  });

  it('should set ascending sort direction when reverse is false', () => {
    mockVariables.reverse = false;

    const result = daffShopifyCategoryTransformer(mockShopifyCategory, mockVariables);

    expect(result.categoryPageMetadata.appliedSortDirection).toBe(DaffSortDirectionEnum.Ascending);
  });

  it('should set descending sort direction when reverse is true', () => {
    mockVariables.reverse = true;

    const result = daffShopifyCategoryTransformer(mockShopifyCategory, mockVariables);

    expect(result.categoryPageMetadata.appliedSortDirection).toBe(DaffSortDirectionEnum.Descending);
  });

  it('should set default sort options', () => {
    const result = daffShopifyCategoryTransformer(mockShopifyCategory, mockVariables);

    expect(result.categoryPageMetadata.sortOptions.default).toBe(ShopifyProductCollectionSortKeys.CollectionDefault);
    expect(result.categoryPageMetadata.sortOptions.options.length).toBeGreaterThan(0);
  });

  it('should set children_count to 0', () => {
    const result = daffShopifyCategoryTransformer(mockShopifyCategory, mockVariables);

    expect(result.category.children_count).toBe(0);
    expect(result.category.children).toEqual([]);
  });

  it('should set pagination metadata', () => {
    const result = daffShopifyCategoryTransformer(mockShopifyCategory, mockVariables);

    expect(result.categoryPageMetadata.currentPage).toBe(1);
    expect(result.categoryPageMetadata.totalPages).toBe(1);
  });
});
