import {
  Menu,
  MenuItem,
  Collection,
  MenuItemType,
} from '@daffodil/driver/shopify';

import {
  transformShopifyMenuToNavTree,
  transformShopifyMenuItemToNavTree,
  transformShopifyCollectionToNavItem,
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
            resource: null,
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
                resource: null,
                resourceId: null,
              },
            ],
            tags: [],
            type: MenuItemType.Collection,
            resource: null,
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
        resource: null,
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
                resource: null,
                resourceId: null,
              },
            ],
            tags: [],
            type: MenuItemType.Collection,
            resource: null,
            resourceId: null,
          },
        ],
        tags: [],
        type: MenuItemType.Collection,
        resource: null,
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

    it('should handle items with null url', () => {
      const item: MenuItem = {
        __typename: 'MenuItem',
        id: 'item-1',
        title: 'Category 1',
        url: null,
        items: [],
        tags: [],
        type: MenuItemType.Collection,
        resource: null,
        resourceId: null,
      };

      const result = transformShopifyMenuItemToNavTree(item);

      expect(result).toEqual({
        id: 'item-1',
        name: 'Category 1',
        url: '',
        breadcrumbs: [],
        children: [],
      });
    });

    it('should extract path from full Shopify URL', () => {
      const item: MenuItem = {
        __typename: 'MenuItem',
        id: 'item-1',
        title: 'Category 1',
        url: 'https://my-store.myshopify.com/collections/category-1',
        items: [],
        tags: [],
        type: MenuItemType.Collection,
        resource: null,
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

    it('should handle relative URLs by adding leading slash', () => {
      const item: MenuItem = {
        __typename: 'MenuItem',
        id: 'item-1',
        title: 'Category 1',
        url: 'collections/category-1',
        items: [],
        tags: [],
        type: MenuItemType.Collection,
        resource: null,
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
  });

  describe('transformShopifyCollectionToNavItem', () => {
    it('should transform a collection to a navigation item', () => {
      const collection: Collection = {
        __typename: 'Collection',
        id: 'collection-1',
        title: 'Collection Title',
        handle: 'collection-handle',
        description: '',
        descriptionHtml: '',
        image: null,
        metafield: null,
        metafields: [],
        onlineStoreUrl: null,
        products: {
          edges: [],
          nodes: [],
          filters: [],
          pageInfo: { hasNextPage: false, hasPreviousPage: false },
        },
        seo: { title: null, description: null },
        trackingParameters: null,
        updatedAt: '2023-01-01T00:00:00Z',
      };

      const result = transformShopifyCollectionToNavItem(collection);

      expect(result).toEqual({
        id: 'collection-1',
        name: 'Collection Title',
        url: '/collections/collection-handle',
        breadcrumbs: [],
        children: [],
      });
    });

    it('should handle collection with special characters in handle', () => {
      const collection: Collection = {
        __typename: 'Collection',
        id: 'collection-2',
        title: 'Special & Collection',
        handle: 'special-collection-123',
        description: '',
        descriptionHtml: '',
        image: null,
        metafield: null,
        metafields: [],
        onlineStoreUrl: null,
        products: {
          edges: [],
          nodes: [],
          filters: [],
          pageInfo: { hasNextPage: false, hasPreviousPage: false },
        },
        seo: { title: null, description: null },
        trackingParameters: null,
        updatedAt: '2023-01-01T00:00:00Z',
      };

      const result = transformShopifyCollectionToNavItem(collection);

      expect(result).toEqual({
        id: 'collection-2',
        name: 'Special & Collection',
        url: '/collections/special-collection-123',
        breadcrumbs: [],
        children: [],
      });
    });
  });
});
