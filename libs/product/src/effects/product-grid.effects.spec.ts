import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of} from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffProductFactory, DaffProductImageFactory, DaffTestingProductService } from '@daffodil/product/testing';
import { DaffProductGridLoad, DaffProductGridLoadSuccess, DaffProductGridLoadFailure } from '../actions/product-grid.actions';
import { DaffProductGridEffects } from './product-grid.effects';
import { DaffProduct } from '../models/product';
import { DaffProductServiceInterface } from '../drivers/interfaces/product-service.interface';
import { DaffProductDriver } from '../drivers/injection-tokens/product-driver.token';

describe('DaffProductGridEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffProductGridEffects<DaffProduct>;
  let productFactory: DaffProductFactory;
  let daffProductDriver: DaffProductServiceInterface<DaffProduct>;
  let mockProductGrid: DaffProduct[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffProductGridEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffProductDriver, 
          useValue: new DaffTestingProductService(new DaffProductFactory(), new DaffProductImageFactory())
        },
      ]
    });

    effects = TestBed.get(DaffProductGridEffects);
    productFactory = TestBed.get(DaffProductFactory);
    daffProductDriver = TestBed.get(DaffProductDriver);

    mockProductGrid = new Array(productFactory.create());
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ProductGridLoadAction is triggered', () => {

    let expected;
    const productGridLoadAction = new DaffProductGridLoad();
    
    describe('and the call to ProductService is successful', () => {

      beforeEach(() => {
        spyOn(daffProductDriver, 'getAll').and.returnValue(of(mockProductGrid));
        const productGridLoadSuccessAction = new DaffProductGridLoadSuccess(mockProductGrid);
        actions$ = hot('--a', { a: productGridLoadAction });
        expected = cold('--b', { b: productGridLoadSuccessAction });
      });
      
      it('should dispatch a ProductGridLoadSuccess action', () => {
        expect(effects.loadAll$).toBeObservable(expected);
      });
    });

    describe('and the call to ProductService fails', () => {
      
      beforeEach(() => {
        const error = 'Failed to load product grid';
        const response = cold('#', {}, error);
        spyOn(daffProductDriver, 'getAll').and.returnValue(response);
        const productGridLoadFailureAction = new DaffProductGridLoadFailure(error);
        actions$ = hot('--a', { a: productGridLoadAction });
        expected = cold('--b', { b: productGridLoadFailureAction });
      });
      
      it('should dispatch a ProductGridLoadFailure action', () => {
        expect(effects.loadAll$).toBeObservable(expected);
      });
    });
  });
});
