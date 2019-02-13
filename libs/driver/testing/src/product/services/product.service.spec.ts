import { TestBed } from '@angular/core/testing';

import { DaffCoreTestingModule, DaffProductImageFactory } from '@daffodil/core/testing';
import { DaffTestingProductService } from './product.service';
import { ProductImage } from '@daffodil/core';
import { productHelper } from '@daffodil/core/testing';

describe('Driver | Testing | Product | ProductService', () => {
  let productService;
  let productImageFactory: jasmine.SpyObj<DaffProductImageFactory>;
  let stubProductImages: ProductImage[];

  beforeEach(() => {
    stubProductImages = new DaffProductImageFactory().createMany(5);
    const productImageFactorySpy = jasmine.createSpyObj('DaffProductImageFactory', ['createMany', 'create']);

    TestBed.configureTestingModule({
      imports: [
        DaffCoreTestingModule
      ],
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
        expect(productHelper.isProduct(products[0])).toBeTruthy();

        expect(products[0].images).toEqual(stubProductImages);
      });
    });
  });

  describe('getBestSellers', () => {

    it('should return an array of products with images', () => {
      productService.getBestSellers().subscribe(products => {
        expect(productHelper.isProduct(products[0])).toBeTruthy();
        expect(products[0].images).toEqual(stubProductImages);
      });
    });
  });

  describe('get', () => {

    it('should return a single product with images', () => {
      productService.get('id').subscribe(product => {
        expect(productHelper.isProduct(product)).toBeTruthy();
        expect(product.images).toEqual(stubProductImages);
      });
    });
  });
});
