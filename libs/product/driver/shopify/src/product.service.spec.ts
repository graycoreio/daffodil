import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { shopifyUrlTransformer } from '@daffodil/driver/shopify';
import { DaffProductFactory } from '@daffodil/product/testing';


import { DaffShopifyProductService } from './product.service';
import {
  getAllProducts,
  getProduct,
  getProductByUrl,
} from './queries/public_api';

describe('Driver | Shopify | Product | ProductService', () => {
  let productService: DaffShopifyProductService;
  let productFactory: DaffProductFactory;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffShopifyProductService,
      ],
    });

    controller = TestBed.inject(ApolloTestingController);

    productService = TestBed.inject(DaffShopifyProductService);
    productFactory = TestBed.inject(DaffProductFactory);
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  describe('getAll | getting a list of products', () => {
    it('should should return an observable array of 20 products by default', done => {
      productService.getAll().subscribe((result) => {
        expect(Array.isArray(result)).toEqual(true);
        expect(result.length).toEqual(20);
        done();
      });

      const products = productFactory.createMany(20);

      const op = controller.expectOne(getAllProducts);

      expect(op.operation.variables.length).toEqual(20);

      op.flush({
        data:{
          products: {
            nodes: products.map((product) => ({
              handle: '',
              onlineStoreUrl: product.canonicalUrl,
              availableForSale: product.in_stock,
              priceRange: {
                minVariantPrice: {
                  amount: product.price,
                  currencyCode: 'USD',
                },
                maxVariantPrice: {
                  amount: product.price,
                  currencyCode: 'USD',
                },
              },
              id: product.id,
              title: product.name,
              description: product.description,
              images: {
                nodes: [],
              },
            })),
          },
        },
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('get | getting a single product', () => {
    it('should return an observable single product', done => {
      const product = productFactory.create();

      productService.get(product.id).subscribe((result) => {
        expect(result.id).toEqual(product.id);
        expect(result.products[0].name).toEqual(product.name);
        done();
      });

      const op = controller.expectOne(getProduct);

      expect(op.operation.variables.id).toEqual(`gid://shopify/Product/${product.id}`);

      op.flush({
        data: {
          product: {
            handle: '',
            id: product.id,
            title: product.name,
            description: product.description,
            availableForSale: product.in_stock,
            onlineStoreUrl: product.canonicalUrl,
            priceRange: {
              minVariantPrice: {
                amount: product.price,
                currencyCode: 'USD',
              },
              maxVariantPrice: {
                amount: product.price,
                currencyCode: 'USD',
              },
            },
            images: {
              nodes: [],
            },
          },
        },
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });

  describe('getByUrl | getting a single product', () => {
    it('should return an observable single product', done => {
      const product = productFactory.create();

      productService.getByUrl(product.url).subscribe((result) => {
        expect(result.id).toEqual(product.id);
        expect(result.products[0].name).toEqual(product.name);
        done();
      });

      const op = controller.expectOne(getProductByUrl);
      expect(op.operation.variables.handle).toEqual(shopifyUrlTransformer(product.url));

      op.flush({
        data: {
          product: {
            handle: '',
            id: product.id,
            title: product.name,
            description: product.description,
            availableForSale: product.in_stock,
            onlineStoreUrl: product.canonicalUrl,
            priceRange: {
              minVariantPrice: {
                amount: product.price,
                currencyCode: 'USD',
              },
              maxVariantPrice: {
                amount: product.price,
                currencyCode: 'USD',
              },
            },
            images: {
              nodes: [],
            },
          },
        },
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
