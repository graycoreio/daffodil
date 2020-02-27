import { TestBed } from '@angular/core/testing';

import { DaffCategoryPageConfigurationState } from '@daffodil/category';

import { DaffCategoryPageConfigurationStateFactory } from './category-page-configuration-state.factory';

describe('Category | Testing | Factories | DaffCategoryPageConfigurationStateFactory', () => {
  
  let categoryPageConfigurationStateFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryPageConfigurationStateFactory]
    });

    categoryPageConfigurationStateFactory = TestBed.get(DaffCategoryPageConfigurationStateFactory);
  });

  it('should be created', () => {
    expect(categoryPageConfigurationStateFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryPageConfigurationState;

    beforeEach(() => {
      result = categoryPageConfigurationStateFactory.create();
    });
    
    it('should return a DaffCategoryPageConfigurationState with all required fields defined', () => {
      expect(result.id).toBeDefined(); 
      expect(result.sort_options[0].label).toBeDefined(); 
      expect(result.sort_options[0].value).toBeDefined(); 
      expect(result.total_pages).toBeDefined(); 
      expect(result.filters).toBeDefined();
      expect(result.product_ids).toBeDefined();
    });
  });

  describe('createMany', () => {
    let result: DaffCategoryPageConfigurationState[];

    it('should create as many categories as desired', () => {
      result = categoryPageConfigurationStateFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = categoryPageConfigurationStateFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
