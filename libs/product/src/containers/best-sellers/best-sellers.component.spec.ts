import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers, select } from '@ngrx/store';

import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffBestSellersContainer } from './best-sellers.component';
import { DaffBestSellersLoad } from '../../actions/best-sellers.actions';
import * as fromProduct from '../../reducers/index';
import { DaffProduct } from '../../models/product';
import { provideMockStore } from '@ngrx/store/testing';

describe('DaffBestSellersContainer', () => {
  let component: DaffBestSellersContainer;
  let fixture: ComponentFixture<DaffBestSellersContainer>;
  let store;
  let initialLoading: boolean;
  let initialProducts: DaffProduct[];
  const productFactory = new DaffProductFactory();
  let bestSeller: DaffProduct;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ DaffBestSellersContainer ],
      providers: [
        provideMockStore()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffBestSellersContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialLoading = false;
    initialProducts = new Array(productFactory.create(), productFactory.create());
    bestSeller = initialProducts[1];

    store.overrideSelector(fromProduct.selectBestSellersLoadingState, initialLoading);
    store.overrideSelector(fromProduct.selectAllProducts, initialProducts);
    store.overrideSelector(fromProduct.selectBestSellersIdsState, [bestSeller.id]);

    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {
    
    it('dispatches a BestSellersLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new DaffBestSellersLoad());
    });

    it('initializes loading$', () => {
      component.loading$.subscribe((loading) => {
        expect(loading).toEqual(initialLoading);
      });
    });

    it('sets bestSellers', () => {
      store.pipe(select(fromProduct.selectAllProducts)).subscribe();

      store.pipe(select(fromProduct.selectBestSellersIdsState)).subscribe(() => {
        expect(component.bestSellers).toEqual([bestSeller]);
      });
    });
  });
});
