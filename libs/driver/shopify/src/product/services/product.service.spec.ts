import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductFactory, DaffCoreTestingModule } from '@daffodil/core/testing';

import { DaffDriverConfigService, DaffDriverConfigFactory } from '@daffodil/driver';

import { DaffShopifyProductService } from './product.service';

describe('Driver | Shopify | Product | ProductService', () => {
  let productService;
  let httpMock: HttpTestingController;
  let productFactory: ProductFactory;

  let daffodilConfigService: DaffDriverConfigService;
  let daffodilConfigFactory: DaffDriverConfigFactory;

  beforeEach(() => {
    daffodilConfigFactory = new DaffDriverConfigFactory();
    daffodilConfigService = new DaffDriverConfigService(
      daffodilConfigFactory.create()
    );

    TestBed.configureTestingModule({
      imports: [
        DaffCoreTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        DaffShopifyProductService,
        { provide: DaffDriverConfigService, useValue: daffodilConfigService }
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
    productService = TestBed.get(DaffShopifyProductService);
    productFactory = TestBed.get(ProductFactory);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  describe('getAll | getting a list of products', () => {
    it('should send a get request', () => {
      let mockProducts = productFactory.createStyleTestingList();

      productService.getAll().subscribe(products => {
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne(`${productService.url}`);
      expect(req.request.method).toBe("GET");

      req.flush(mockProducts);
    });

    xit('should query the getAll url from configuration', () => {

    })
  });

  describe('get | getting a single product', () => {
    let productId;

    it('should send a get request', () => {
      let mockProduct = productFactory.create();

      productService.get(mockProduct.id).subscribe(product => {
        expect(product).toEqual(mockProduct);
      });

      const req = httpMock.expectOne(`${productService.url}${mockProduct.id}`);
      expect(req.request.method).toBe("GET");

      req.flush(mockProduct);
    });

    xit('should query the base url from configuration', () => {
      
    })
  });
});
