import { TestBed } from '@angular/core/testing';

import { ProductImage } from 'product/src';

import { DaffProductImageFactory } from 'product/testing/src/factories/product-image.factory';
import { DaffTestingProductService } from 'product/testing/src/drivers/testing/product.service';
import { isProduct } from 'product/testing/src/helpers/product-helper';

describe('Driver | Testing | Product | ProductService', () => {
  let productService;
  let productImageFactory: jasmine.SpyObj<DaffProductImageFactory>;
  let stubProductImages: ProductImage[];

  beforeEach(() => {
    stubProductImages = new DaffProductImageFactory().createMany(5);
    const productImageFactorySpy = jasmine.createSpyObj('DaffProductImageFactory', ['createMany', 'create']);

    TestBed.configureTestingModule({
      providers: [
        { provide: DaffProductImageFactory, useValue: productImageFactorySpy }
      ]
    });

    productService = TestBed.get(DaffTestingProductService);
    productImageFactory = TestBed.get(DaffProductImageFactory);

    productImageFactory.createMany.and.returnValue(stubProductImages);
    productImageFactory.create.and.returnValue(stubProductImages[0]);
  });

  it('should be created', () => {
    expect(productService).toBeTruthy();
  });

  describe('getAll', () => {

    it('should return a list of products with images', () => {
      productService.getAll().subscribe(products => {
        expect(isProduct(products[0])).toBeTruthy();

        expect(products[0].images).toEqual(stubProductImages);
      });
    });
  });

  describe('getBestSellers', () => {

    it('should return an array of products with images', () => {
      productService.getBestSellers().subscribe(products => {
        expect(isProduct(products[0])).toBeTruthy();
        expect(products[0].images).toEqual(stubProductImages);
      });
    });
  });

  describe('get', () => {

    it('should return a single product with images', () => {
      productService.get('id').subscribe(product => {
        expect(isProduct(product)).toBeTruthy();
        expect(product.images).toEqual(stubProductImages);
      });
    });
  });
});
