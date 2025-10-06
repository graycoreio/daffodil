import {
  Menu,
  MenuItem,
  MenuItemType,
} from '@daffodil/driver/shopify';

import {
  transformShopifyMenuToNavTree,
  transformShopifyMenuItemToNavTree,
} from './navigation-transform';

describe('Shopify Navigation Transforms', () => {
  describe('transformShopifyMenuToNavTree', () => {
    it('should return default navigation tree when menu is null', () => {
      const result = transformShopifyMenuToNavTree(null);

      expect(result).toEqual({
        id: 'root',
        name: 'Navigation',
        url: '/',
        breadcrumbs: [],
        children: [],
      });
    });

    it('should return default navigation tree when menu is undefined', () => {
      const result = transformShopifyMenuToNavTree(undefined);

      expect(result).toEqual({
        id: 'root',
        name: 'Navigation',
        url: '/',
        breadcrumbs: [],
        children: [],
      });
    });

    it('should transform a simple menu without items', () => {
      const menu: Menu = {
        __typename: 'Menu',
        id: 'menu-1',
        title: 'Main Menu',
        handle: 'main-menu',
        items: [],
        itemsCount: 0,
      };

      const result = transformShopifyMenuToNavTree(menu);

      expect(result).toEqual({
        id: 'menu-1',
        name: 'Main Menu',
        url: '/',
        breadcrumbs: [],
        children: [],
      });
    });

    it('should transform a menu with items', () => {
      const menu: Menu = {
        __typename: 'Menu',
        id: 'menu-1',
        title: 'Main Menu',
        handle: 'main-menu',
        itemsCount: 2,
        items: [
          {
            __typename: 'MenuItem',
            id: 'item-1',
            title: 'Category 1',
            url: '/collections/category-1',
            items: [],
            tags: [],
            type: MenuItemType.Collection,
            resource: <any>{
              __typename: 'Collection',
              id: 'asdasdasdasd',
              metafields: [],
              handle: 'category-1',
            },
            resourceId: null,
          },
          {
            __typename: 'MenuItem',
            id: 'item-2',
            title: 'Category 2',
            url: '/collections/category-2',
            items: [
              {
                __typename: 'MenuItem',
                id: 'item-2-1',
                title: 'Subcategory 1',
                url: '/collections/subcategory-1',
                items: [],
                tags: [],
                type: MenuItemType.Collection,
                resource: <any>{
                  __typename: 'Collection',
                  id: 'asdasdasdasd',
                  metafields: [],
                  handle: 'subcategory-1',
                },
                resourceId: null,
              },
            ],
            tags: [],
            type: MenuItemType.Collection,
            resource: <any>{
              __typename: 'Collection',
              id: 'asdasdasdasd',
              metafields: [],
              handle: 'category-2',
            },
            resourceId: null,
          },
        ],
      };

      const result = transformShopifyMenuToNavTree(menu);

      expect(result).toEqual({
        id: 'menu-1',
        name: 'Main Menu',
        url: '/',
        breadcrumbs: [],
        children: [
          {
            id: 'item-1',
            name: 'Category 1',
            url: '/collections/category-1',
            breadcrumbs: [],
            children: [],
          },
          {
            id: 'item-2',
            name: 'Category 2',
            url: '/collections/category-2',
            breadcrumbs: [],
            children: [
              {
                id: 'item-2-1',
                name: 'Subcategory 1',
                url: '/collections/subcategory-1',
                breadcrumbs: [],
                children: [],
              },
            ],
          },
        ],
      });
    });
  });

  describe('transformShopifyMenuItemToNavTree', () => {
    it('should transform a simple menu item without children', () => {
      const item: MenuItem = {
        __typename: 'MenuItem',
        id: 'item-1',
        title: 'Category 1',
        url: '/collections/category-1',
        items: [],
        tags: [],
        type: MenuItemType.Collection,
        resource: <any>{
          __typename: 'Collection',
          id: 'collection-id',
          metafields: [],
          handle: 'category-1',
        },
        resourceId: null,
      };

      const result = transformShopifyMenuItemToNavTree(item);

      expect(result).toEqual({
        id: 'item-1',
        name: 'Category 1',
        url: '/collections/category-1',
        breadcrumbs: [],
        children: [],
      });
    });

    it('should transform a menu item with nested children', () => {
      const item: MenuItem = {
        __typename: 'MenuItem',
        id: 'item-1',
        title: 'Category 1',
        url: '/collections/category-1',
        items: [
          {
            __typename: 'MenuItem',
            id: 'item-1-1',
            title: 'Subcategory 1',
            url: '/collections/subcategory-1',
            items: [
              {
                __typename: 'MenuItem',
                id: 'item-1-1-1',
                title: 'Sub-subcategory 1',
                url: '/collections/sub-subcategory-1',
                items: [],
                tags: [],
                type: MenuItemType.Collection,
                resource: <any>{
                  __typename: 'Collection',
                  id: 'collection-id-3',
                  metafields: [],
                  handle: 'sub-subcategory-1',
                },
                resourceId: null,
              },
            ],
            tags: [],
            type: MenuItemType.Collection,
            resource: <any>{
              __typename: 'Collection',
              id: 'collection-id-2',
              metafields: [],
              handle: 'subcategory-1',
            },
            resourceId: null,
          },
        ],
        tags: [],
        type: MenuItemType.Collection,
        resource: <any>{
          __typename: 'Collection',
          id: 'collection-id-1',
          metafields: [],
          handle: 'category-1',
        },
        resourceId: null,
      };

      const result = transformShopifyMenuItemToNavTree(item);

      expect(result).toEqual({
        id: 'item-1',
        name: 'Category 1',
        url: '/collections/category-1',
        breadcrumbs: [],
        children: [
          {
            id: 'item-1-1',
            name: 'Subcategory 1',
            url: '/collections/subcategory-1',
            breadcrumbs: [],
            children: [
              {
                id: 'item-1-1-1',
                name: 'Sub-subcategory 1',
                url: '/collections/sub-subcategory-1',
                breadcrumbs: [],
                children: [],
              },
            ],
          },
        ],
      });
    });

    it('should handle items with products', () => {
      const item: MenuItem = {
        __typename: 'MenuItem',
        id: 'item-1',
        title: 'Product 1',
        url: null,
        items: [],
        tags: [],
        type: MenuItemType.Product,
        resource: <any>{
          __typename: 'Product',
          id: 'product-id',
          metafields: [],
          handle: 'awesome-product',
        },
        resourceId: null,
      };

      const result = transformShopifyMenuItemToNavTree(item);

      expect(result).toEqual({
        id: 'item-1',
        name: 'Product 1',
        url: '/products/awesome-product',
        breadcrumbs: [],
        children: [],
      });
    });

    it('should handle pages', () => {
      const item: MenuItem = {
        __typename: 'MenuItem',
        id: 'item-1',
        title: 'About Us',
        url: 'https://my-store.myshopify.com/pages/about-us',
        items: [],
        tags: [],
        type: MenuItemType.Page,
        resource: <any>{
          __typename: 'Page',
          id: 'page-id',
          handle: 'about-us',
        },
        resourceId: null,
      };

      const result = transformShopifyMenuItemToNavTree(item);

      expect(result).toEqual({
        id: 'item-1',
        name: 'About Us',
        url: '/pages/about-us',
        breadcrumbs: [],
        children: [],
      });
    });

    it('should handle unknown types with pluralization', () => {
      const item: MenuItem = {
        __typename: 'MenuItem',
        id: 'item-1',
        title: 'Blog Post',
        items: [],
        tags: [],
        type: MenuItemType.Article,
        resource: <any>{
          __typename: 'Article',
          id: 'article-id',
          handle: 'my-blog-post',
        },
        resourceId: null,
      };

      const result = transformShopifyMenuItemToNavTree(item);

      expect(result).toEqual({
        id: 'item-1',
        name: 'Blog Post',
        url: '/articles/my-blog-post',
        breadcrumbs: [],
        children: [],
      });
    });
  });
});
