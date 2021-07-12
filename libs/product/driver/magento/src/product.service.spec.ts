import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingModule,
  ApolloTestingController,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';
import { Observable } from 'rxjs';

import { schema } from '@daffodil/driver/magento';
import { DaffProductDriverResponse } from '@daffodil/product/driver';
import {
  MagentoSimpleProduct,
  getProduct,
  getProductByUrl,
} from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { DaffMagentoProductService } from './product.service';
import { DaffMagentoProductsTransformer } from './transforms/product-transformers';

describe('Product | Magento | ProductService', () => {
  let service: DaffMagentoProductService;
  let controller: ApolloTestingController;
  let magentoSimpleProductFactory: MagentoProductFactory;
  let stubSimpleProduct: MagentoSimpleProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoProductService,
        DaffMagentoProductsTransformer,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffMagentoProductService);
    controller = TestBed.inject(ApolloTestingController);
    magentoSimpleProductFactory = TestBed.inject(MagentoProductFactory);

    stubSimpleProduct = magentoSimpleProductFactory.create();
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get | getting a single product', () => {
    it('should return a DaffProduct', done => {
      service.get('TESTING_SKU').subscribe(r => {
        expect(r.id).toEqual(stubSimpleProduct.sku);
        expect(r.products[0].id).toEqual(stubSimpleProduct.sku);
        expect(r.products[0].name).toBeDefined();
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getProduct()));

      op.flush({
        data: {
          products: {
            __typename: 'Products',
            items: [stubSimpleProduct],
          },
        },
      });
    });

    describe('handling different product types', () => {
      it('should be able to retrieve a DaffProduct for a simple', done => {
        service.get('TESTING_SKU').subscribe(r => {
          expect(r.id).toEqual(stubSimpleProduct.sku);
          expect(r.products[0].id).toEqual(stubSimpleProduct.sku);
          expect(r.products[0].name).toBeDefined();
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getProduct()));

        op.flush({
          data: {
            products: {
              __typename: 'Products',
              items: [stubSimpleProduct],
            },
          },
        });
      });
    });
  });

  describe('getByUrl | getting a single product by url', () => {
    let url: string;
    let result: Observable<DaffProductDriverResponse>;

    beforeEach(() => {
      url = '/path/to/TESTING_URL?with=query#fragment';
      result = service.getByUrl(url);
    });

    it('should return a DaffProduct', done => {
      result.subscribe(r => {
        expect(r.id).toEqual(stubSimpleProduct.sku);
        expect(r.products[0].id).toEqual(stubSimpleProduct.sku);
        expect(r.products[0].name).toBeDefined();
        done();
      });

      const op = controller.expectOne(addTypenameToDocument(getProductByUrl()));

      op.flush({
        data: {
          products: {
            __typename: 'Products',
            items: [stubSimpleProduct],
          },
        },
      });
    });

    it('should query the category with the truncated URL', () => {
      result.subscribe();

      const op = controller.expectOne(addTypenameToDocument(getProductByUrl()));

      expect(op.operation.variables.url).toEqual('TESTING_URL');
    });
  });
});
