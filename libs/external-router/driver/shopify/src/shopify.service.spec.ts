import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { DaffShopifyExternalRouterDriver } from './shopify.service';

describe('@daffodil/external-router/driver/shopify | DaffShopifyExternalRouterDriver', () => {
  let service: DaffShopifyExternalRouterDriver;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffShopifyExternalRouterDriver],
    });
    service = TestBed.inject(DaffShopifyExternalRouterDriver);

    scheduler = new TestScheduler((actual, expected) => {
      // eslint-disable-next-line jasmine/no-expect-in-setup-teardown
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    describe('when the URL matches a product pattern', () => {
      it('should return a resolved product route for /products/my-product', () => {
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
          const { expectObservable } = helpers;
          const expected = '(a|)';

          expectObservable(service.resolve('/products/category/subcategory/product')).toBe(expected, {
            a: {
              id: 'null',
              url: '/products/category/subcategory/product',
              code: 404,
              type: 'UNKNOWN',
            },
          });
        });
      });
    });

    describe('when the URL does not match any pattern', () => {
      it('should return a 404 result for non-product URLs', () => {
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
        scheduler.run(helpers => {
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
