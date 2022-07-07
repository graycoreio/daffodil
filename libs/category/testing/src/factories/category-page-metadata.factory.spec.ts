import { TestBed } from '@angular/core/testing';

import { DaffCategoryPageMetadata } from '@daffodil/category';

import { DaffCategoryPageMetadataFactory } from './category-page-metadata.factory';

describe('Category | Testing | Factories | DaffCategoryPageMetadataFactory', () => {

  let categoryPageMetadataFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryPageMetadataFactory],
    });

    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
  });

  it('should be created', () => {
    expect(categoryPageMetadataFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryPageMetadata;

    beforeEach(() => {
      result = categoryPageMetadataFactory.create();
    });

    it('should return a DaffCategoryPageMetadata with all required fields defined', () => {
      expect(result.id).toBeDefined();
    });
  });
});
