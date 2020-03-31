import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, select } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffBestSellersContainer } from './best-sellers.component';
import { DaffBestSellersLoad } from '../../actions/best-sellers.actions';
import { DaffProduct } from '../../models/product';
import { selectBestSellersLoadingState, selectBestSellersIdsState } from '../../selectors/best-sellers.selectors';
import { selectAllProducts } from '../../selectors/product-entities.selectors';

describe('DaffBestSellersContainer', () => {
  let component: DaffBestSellersContainer;
  let fixture: ComponentFixture<DaffBestSellersContainer>;
  let store: MockStore<any>;
  let initialLoading: boolean;
  let initialProducts: DaffProduct[];
  const productFactory = new DaffProductFactory();
  let bestSeller: DaffProduct;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ DaffBestSellersContainer ],
      providers: [
        provideMockStore({})
      ]
    })
    .compileComponents();

    store = TestBed.get(Store);
    fixture = TestBed.createComponent(DaffBestSellersContainer);
    component = fixture.componentInstance;

    initialLoading = false;
    initialProducts = productFactory.createMany(2);
    bestSeller = initialProducts[1];

    store.overrideSelector(selectBestSellersLoadingState, initialLoading);
    store.overrideSelector(selectAllProducts, initialProducts);
    store.overrideSelector(selectBestSellersIdsState, [bestSeller.id]);

    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  afterAll(() => {
    store.resetSelectors();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    
    it('dispatches a BestSellersLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new DaffBestSellersLoad());
    });

    it('initializes loading$', () => {
      component.loading$.subscribe((loading) => {
        expect(loading).toEqual(initialLoading);
      });
    });

    it('sets bestSellers', () => {
      store.pipe(select(selectAllProducts)).subscribe();

      store.pipe(select(selectBestSellersIdsState)).subscribe(() => {
        expect(component.bestSellers).toEqual([bestSeller]);
      });
    });
  });
});
