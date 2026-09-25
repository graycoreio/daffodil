import { TestBed } from '@angular/core/testing';

import { runMarbles } from '@daffodil/jasmine';

import { DaffShopifyExternalRouterDriver } from './shopify.service';

describe('@daffodil/external-router/driver/shopify | DaffShopifyExternalRouterDriver', () => {
  let service: DaffShopifyExternalRouterDriver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffShopifyExternalRouterDriver],
    });
    service = TestBed.inject(DaffShopifyExternalRouterDriver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    describe('when the URL matches a product pattern', () => {
      it('should return a resolved product route for /products/my-product', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products/my-product')).toBe(expected, {
            a: {
              id: 'my-product',
              url: 'products/my-product',
              code: 200,
              type: 'PRODUCT',
            },
          });
        });
      });

      it('should return a resolved product route for products/slug (no leading slash)', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('products/my-product')).toBe(expected, {
            a: {
              id: 'my-product',
              url: 'products/my-product',
              code: 200,
              type: 'PRODUCT',
            },
          });
        });
      });

      it('should handle product slugs with dashes', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products/my-awesome-product')).toBe(expected, {
            a: {
              id: 'my-awesome-product',
              url: 'products/my-awesome-product',
              code: 200,
              type: 'PRODUCT',
            },
          });
        });
      });

      it('should handle product slugs with underscores', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products/my_awesome_product')).toBe(expected, {
            a: {
              id: 'my_awesome_product',
              url: 'products/my_awesome_product',
              code: 200,
              type: 'PRODUCT',
            },
          });
        });
      });

      it('should handle product slugs with numbers', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products/product-123')).toBe(expected, {
            a: {
              id: 'product-123',
              url: 'products/product-123',
              code: 200,
              type: 'PRODUCT',
            },
          });
        });
      });

      it('should handle product slugs with file extensions and return a slug without extension', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products/my-product.html')).toBe(expected, {
            a: {
              id: 'my-product',
              url: 'products/my-product.html',
              code: 200,
              type: 'PRODUCT',
            },
          });
        });
      });

      it('should return successfully for URLs with query parameters (undefined behavior)', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products/my-product?variant=blue')).toBe(expected, {
            a: {
              id: 'my-product?variant=blue',
              url: 'products/my-product?variant=blue',
              code: 200,
              type: 'PRODUCT',
            },
          });
        });
      });

      it('should return successfully for URLs with hash fragments (undefined behavior)', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products/my-product#reviews')).toBe(expected, {
            a: {
              id: 'my-product#reviews',
              url: 'products/my-product#reviews',
              code: 200,
              type: 'PRODUCT',
            },
          });
        });
      });

      it('should handle product slugs with special characters (undefined behavior)', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products/my-product@special')).toBe(expected, {
            a: {
              id: 'my-product@special',
              url: 'products/my-product@special',
              code: 200,
              type: 'PRODUCT',
            },
          });
        });
      });

      it('should return 404 for nested paths (regex only matches direct product slugs)', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products/category/subcategory/product')).toBe(expected, {
            a: {
              id: null,
              url: null,
              code: 404,
              type: null,
            },
          });
        });
      });
    });

    describe('when the URL does not match any pattern', () => {
      it('should return a 404 result for non-product URLs', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/collections/summer-sale')).toBe(expected, {
            a: {
              id: null,
              url: null,
              code: 404,
              type: null,
            },
          });
        });
      });

      it('should return a 404 result for homepage', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/')).toBe(expected, {
            a: {
              id: null,
              url: null,
              code: 404,
              type: null,
            },
          });
        });
      });

      it('should return a 404 result for empty string', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('')).toBe(expected, {
            a: {
              id: null,
              url: null,
              code: 404,
              type: null,
            },
          });
        });
      });

      it('should return a 404 result for /pages/about', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/pages/about')).toBe(expected, {
            a: {
              id: null,
              url: null,
              code: 404,
              type: null,
            },
          });
        });
      });

      it('should return a 404 result for /blogs/news', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/blogs/news')).toBe(expected, {
            a: {
              id: null,
              url: null,
              code: 404,
              type: null,
            },
          });
        });
      });

      it('should return a 404 result for URLs that start with product but not products', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/product/my-item')).toBe(expected, {
            a: {
              id: null,
              url: null,
              code: 404,
              type: null,
            },
          });
        });
      });

      it('should return a 404 result for /products without a slug', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products')).toBe(expected, {
            a: {
              id: null,
              url: null,
              code: 404,
              type: null,
            },
          });
        });
      });

      it('should return a 404 result for /products/ with trailing slash but no slug', () => {
        runMarbles(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products/')).toBe(expected, {
            a: {
              id: null,
              url: null,
              code: 404,
              type: null,
            },
          });
        });
      });
    });
  });
});
