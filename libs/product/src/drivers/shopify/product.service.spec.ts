import { TestBed } from '@angular/core/testing';

import { DaffProductFactory } from '@daffodil/product/testing';

import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

import { DaffShopifyProductService, GetAllProductsQuery, GetAProduct } from './product.service';

describe('Driver | Shopify | Product | ProductService', () => {
  let productService: DaffShopifyProductService;
  let productFactory: DaffProductFactory;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule
      ],
      providers: [
        DaffShopifyProductService
      ]
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

      const op = controller.expectOne(GetAllProductsQuery);

      expect(op.operation.variables.length).toEqual(20);

      op.flush({
        data:{
          shop: {
            products: {
              edges: products.map(product => {
                  return { node: {
                    title: product.name,
                    id: product.id
                  }}
                })
            }
          }
        }
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
        expect(result.name).toEqual(product.name);
        done();
      });

      const op = controller.expectOne(GetAProduct);

      expect(op.operation.variables.id).toEqual(product.id);

      op.flush({
        data: {
          node: {
            __typename: 'Product',
            id: product.id,
            title: product.name
          }
        }
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});
