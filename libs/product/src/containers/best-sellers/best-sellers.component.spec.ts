import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule, combineReducers, select } from '@ngrx/store';

import { BestSellersContainer } from './best-sellers.component';
import { BestSellersLoad } from '../../actions/best-sellers.actions';
import * as fromProduct from '../../reducers/index';
import { Product } from '../../models/product';
import { DaffProductFactory } from '../../../testing/src';

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
