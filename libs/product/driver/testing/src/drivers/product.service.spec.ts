import { TestBed } from '@angular/core/testing';

import { DaffProductImage } from '@daffodil/product';
import {
  DaffProductImageFactory,
  isProduct,
  provideDaffProductExtraFactoryTypes,
  DaffProductFactory,
} from '@daffodil/product/testing';

import { DaffTestingProductService } from './product.service';

describe('Driver | Testing | Product | ProductService', () => {
  let productService: DaffTestingProductService;
  let productImageFactory: DaffProductImageFactory;
  let stubProductImages: DaffProductImage[];

  beforeEach(() => {
    stubProductImages = new DaffProductImageFactory().createMany(5);

    TestBed.configureTestingModule({
      providers: [
        provideDaffProductExtraFactoryTypes(DaffProductFactory),
      ],
    });

    productService = TestBed.inject(DaffTestingProductService);
    productImageFactory = TestBed.inject(DaffProductImageFactory);

    spyOn(productImageFactory, 'createMany').and.returnValue(stubProductImages);
    spyOn(productImageFactory, 'create').and.returnValue(stubProductImages[0]);
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

    it('should return a driver response with a single product with images', () => {
      productService.get('id').subscribe(resp => {
        expect(resp.id).toEqual('id');
        expect(isProduct(resp.products[0])).toBeTruthy();
        expect(resp.products[0].images).toEqual(stubProductImages);
      });
    });
  });

  describe('getByUrl', () => {

    it('should return a driver response with a single product with images and the same url', () => {
      const url = 'url';

      productService.getByUrl(url).subscribe(resp => {
        expect(isProduct(resp.products[0])).toBeTruthy();
        expect(resp.products[0].images).toEqual(stubProductImages);
        expect(resp.products[0].url).toEqual(url);
      });
    });
  });
});
