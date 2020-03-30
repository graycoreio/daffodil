import { TestBed } from '@angular/core/testing';

import { DaffSpecificNavigationTree } from '@daffodil/navigation';

import { DaffNavigationTreeFactory } from './navigation-tree.factory';

describe('Navigation | Testing | Factories | DaffNavigationTreeFactory', () => {
  
  let navigationTreeFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffNavigationTreeFactory]
    });

    navigationTreeFactory = TestBed.get(DaffNavigationTreeFactory);
  });

  it('should be created', () => {
    expect(navigationTreeFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffSpecificNavigationTree;

    beforeEach(() => {
      result = navigationTreeFactory.create();
    });
    
    it('should return a Navigation with all required fields defined', () => {
      expect(result.id).toBeDefined(); 
      expect(result.name).toBeDefined(); 
      expect(result.path).toBeDefined(); 
      expect(result.children_count).toBeDefined(); 
      expect(result.total_products).toBeDefined(); 
    });
  });

  describe('createMany', () => {
    let result: DaffSpecificNavigationTree[];

    it('should create as many categories as desired', () => {
      result = navigationTreeFactory.createMany(2);
      expect(result.length).toEqual(2);

      result = navigationTreeFactory.createMany(3);
      expect(result.length).toEqual(3);
    })
  })
});
