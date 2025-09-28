import { shopifyUrlTransformer } from './shopify-url-transform';

describe('@daffodil/driver/shopify | shopifyUrlTransformer', () => {
  describe('when transforming URLs to Shopify handles', () => {
    it('should extract the handle from a simple path', () => {
      expect(shopifyUrlTransformer('/products/my-product')).toEqual('my-product');
    });

    it('should extract the handle from a nested path', () => {
      expect(shopifyUrlTransformer('/collections/category/products/product-name')).toEqual('product-name');
    });

    it('should remove file extensions', () => {
      expect(shopifyUrlTransformer('/products/my-product.html')).toEqual('my-product');
    });

    it('should handle multiple file extensions', () => {
      expect(shopifyUrlTransformer('/products/my-product.test.html')).toEqual('my-product');
    });

    it('should handle URLs with query parameters after extension', () => {
      expect(shopifyUrlTransformer('/products/my-product.html?param=value')).toEqual('my-product');
    });

    it('should handle URLs without leading slash', () => {
      expect(shopifyUrlTransformer('products/my-product')).toEqual('my-product');
    });

    it('should handle single segment URLs', () => {
      expect(shopifyUrlTransformer('my-product')).toEqual('my-product');
    });

    it('should handle single segment URLs with extension', () => {
      expect(shopifyUrlTransformer('my-product.html')).toEqual('my-product');
    });

    it('should handle URLs with trailing slash', () => {
      expect(shopifyUrlTransformer('/products/my-product/')).toEqual('');
    });

    it('should handle empty string', () => {
      expect(shopifyUrlTransformer('')).toEqual('');
    });

    it('should handle just a slash', () => {
      expect(shopifyUrlTransformer('/')).toEqual('');
    });

    it('should handle URLs with dashes in handle', () => {
      expect(shopifyUrlTransformer('/products/my-awesome-product')).toEqual('my-awesome-product');
    });

    it('should handle URLs with underscores in handle', () => {
      expect(shopifyUrlTransformer('/products/my_awesome_product')).toEqual('my_awesome_product');
    });

    it('should handle URLs with numbers in handle', () => {
      expect(shopifyUrlTransformer('/products/product-123')).toEqual('product-123');
    });

    it('should handle complex nested paths', () => {
      expect(shopifyUrlTransformer('/collections/summer-2024/products/beach-shirt')).toEqual('beach-shirt');
    });

    it('should handle URLs with special characters in handle', () => {
      expect(shopifyUrlTransformer('/products/product@special')).toEqual('product@special');
    });

    it('should handle URLs with multiple dots in filename', () => {
      expect(shopifyUrlTransformer('/products/my.product.name.html')).toEqual('my');
    });

    it('should handle URLs ending with just an extension', () => {
      expect(shopifyUrlTransformer('/products/.html')).toEqual('');
    });
  });
});
