import { getShopifyRoutePath } from './get-route';

describe('@daffodil/driver/shopify | getShopifyRoutePath', () => {
  describe('when generating route paths from resource type and handle', () => {
    it('should generate collection path', () => {
      expect(getShopifyRoutePath('COLLECTION', 'summer-collection')).toEqual('/collections/summer-collection');
    });

    it('should generate product path', () => {
      expect(getShopifyRoutePath('PRODUCT', 'cool-shirt')).toEqual('/products/cool-shirt');
    });

    it('should generate page path', () => {
      expect(getShopifyRoutePath('PAGE', 'about-us')).toEqual('/pages/about-us');
    });

    it('should generate lowercase pluralized path for unknown types', () => {
      expect(getShopifyRoutePath('BLOG', 'my-blog')).toEqual('/blogs/my-blog');
    });

    it('should generate lowercase pluralized path for article type', () => {
      expect(getShopifyRoutePath('ARTICLE', 'blog-post')).toEqual('/articles/blog-post');
    });

    it('should throw for empty string type', () => {
      expect(() => getShopifyRoutePath('', 'some-handle')).toThrow('Resource type cannot be empty');
    });

    it('should handle handles with special characters', () => {
      expect(getShopifyRoutePath('PRODUCT', 'product-with-dashes')).toEqual('/products/product-with-dashes');
    });

    it('should handle handles with underscores', () => {
      expect(getShopifyRoutePath('COLLECTION', 'collection_with_underscores')).toEqual('/collections/collection_with_underscores');
    });

    it('should handle handles with numbers', () => {
      expect(getShopifyRoutePath('PRODUCT', 'product-123')).toEqual('/products/product-123');
    });

    it('should lowercase mixed case unknown types', () => {
      expect(getShopifyRoutePath('CustomType', 'my-item')).toEqual('/customtypes/my-item');
    });
  });
});
