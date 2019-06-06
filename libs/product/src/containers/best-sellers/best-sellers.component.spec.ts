import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers, select } from '@ngrx/store';

import { DaffProductFactory } from 'product/testing/src';

import { BestSellersContainer } from 'product/src/containers/best-sellers/best-sellers.component';
import { BestSellersLoad } from 'product/src/actions/best-sellers.actions';
import * as fromProduct from 'product/src/reducers';
import { Product } from 'product/src/models/product';


describe('BestSellersContainer', () => {
  let component: BestSellersContainer;
  let fixture: ComponentFixture<BestSellersContainer>;
  let store;
  let initialLoading: boolean;
  let initialProducts: Product[];
  const productFactory = new DaffProductFactory();
  let bestSeller: Product;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          products: combineReducers(fromProduct.reducers),
        })
      ],
      declarations: [ BestSellersContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellersContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialLoading = false;
    initialProducts = new Array(productFactory.create(), productFactory.create());
    bestSeller = initialProducts[1];

    spyOn(fromProduct, 'selectBestSellersLoadingState').and.returnValue(initialLoading);
    spyOn(fromProduct, 'selectAllProducts').and.returnValue(initialProducts);
    spyOn(fromProduct, 'selectBestSellersIdsState').and.returnValue([bestSeller.id]);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {
    
    it('dispatches a BestSellersLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new BestSellersLoad());
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
