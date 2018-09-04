import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { ProductFactory } from '@daffodil/core';
import { Product } from '@daffodil/core';

import { BestSellerGridContainer } from './best-seller-grid.component';
import { BestSellerGridLoad } from '../../actions/best-seller-grid.actions';
import * as fromProduct from '../../reducers/index';

describe('BestSellerGridContainer', () => {
  let component: BestSellerGridContainer;
  let fixture: ComponentFixture<BestSellerGridContainer>;
  let store;
  let initialLoading: boolean;
  let initialProducts: Product[];
  let productFactory = new ProductFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          products: combineReducers(fromProduct.reducers),
        })
      ],
      declarations: [ BestSellerGridContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellerGridContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialLoading = false;
    initialProducts = new Array(productFactory.create());

    spyOn(fromProduct, 'selectBestSellerGridLoadingState').and.returnValue(initialLoading);
    spyOn(fromProduct, 'selectAllBestSeller').and.returnValue(initialProducts);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {
    
    it('dispatches a BestSellerGridLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new BestSellerGridLoad());
    });

    it('initializes loading$', () => {
      component.loading$.subscribe((loading) => {
        expect(loading).toEqual(initialLoading);
      });
    });

    it('initializes products$', () => {
      component.products$.subscribe((products) => {
        expect(products).toEqual(initialProducts);
      });
    });
  });
});
