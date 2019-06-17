import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductGridContainer } from './product-grid.component';
import { DaffProductGridLoad } from '../../actions/product-grid.actions';
import * as fromProduct from '../../reducers/index';
import { DaffProduct } from '../../models/product';

describe('DaffProductGridContainer', () => {
  let component: DaffProductGridContainer;
  let fixture: ComponentFixture<DaffProductGridContainer>;
  let store;
  let initialLoading: boolean;
  let initialProducts: DaffProduct[];
  const productFactory = new DaffProductFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          products: combineReducers(fromProduct.reducers),
        })
      ],
      declarations: [ DaffProductGridContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffProductGridContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialLoading = false;
    initialProducts = new Array(productFactory.create());

    spyOn(fromProduct, 'selectProductGridLoadingState').and.returnValue(initialLoading);
    spyOn(fromProduct, 'selectAllProducts').and.returnValue(initialProducts);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {
    
    it('dispatches a ProductGridLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new DaffProductGridLoad());
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
