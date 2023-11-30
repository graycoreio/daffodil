import { TestBed } from '@angular/core/testing';

import { DaffCategory } from '@daffodil/category';
import { DaffProduct } from '@daffodil/product';

import { DaffCategoryFactory } from './category.factory';

describe('@daffodil/category/testing | DaffCategoryFactory', () => {
  let factory: DaffCategoryFactory;
  let result: DaffCategory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryFactory],
    });

    factory = TestBed.inject(DaffCategoryFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    beforeEach(() => {
      result = factory.create();
    });

    it('should return a Category with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.canonicalUrl).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.meta_title).toBeDefined();
      expect(result.meta_description).toBeDefined();
      expect(result.children_count).toBeDefined();
      expect(result.total_products).toBeDefined();
      expect(result.product_ids).toBeDefined();
      expect(result.breadcrumbs).toBeDefined();
    });

    it('should set a leading slash for the URL', () => {
      expect(result.url[0]).toEqual('/');
    });
  });

  describe('createTree', () => {
    describe('when depth is 0', () => {
      beforeEach(() => {
        result = factory.createTree(0);
      });

      it('should create no children', () => {
        expect(result.children?.length).toBeFalsy();
      });
    });

    describe('when depth is 2', () => {
      beforeEach(() => {
        result = factory.createTree(2);
      });

      it('should create children of children', () => {
        expect(result.children?.length).toBeGreaterThan(0);
        result.children.forEach((child) => {
          expect(child.children?.length).toBeGreaterThan(0);
          child.children.forEach((inner) => {
            expect(inner.children?.length).toBeFalsy();
          });
        });
      });
    });

    describe('when product IDs are specified', () => {
      let productIds: DaffProduct['id'][];

      beforeEach(() => {
        productIds = ['0', '1', '2', '3'];
        result = factory.createTree(1, productIds);
      });

      it('should set product fields from the IDs', () => {
        expect(result.product_ids).toEqual(productIds);
        expect(result.total_products).toEqual(productIds.length);
      });

      it('should set child product fields from a subset, no smaller than half of the previous set, of the passed IDs', () => {
        result.children.forEach((child) => {
          child.product_ids.forEach((id) => {
            expect(productIds).toContain(id);
          });
          expect(child.product_ids.length).toBeGreaterThanOrEqual(productIds.length / 2);
          expect(child.product_ids.length).toBeLessThanOrEqual(productIds.length);
          expect(child.total_products).toEqual(child.product_ids.length);
        });
      });
    });
  });
});
