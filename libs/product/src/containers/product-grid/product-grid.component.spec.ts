import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductGridContainer } from './product-grid.component';
import { DaffProductGridLoad } from '../../actions/product-grid.actions';
import * as fromProduct from '../../reducers/index';
import { DaffProduct } from '../../models/product';

describe('DaffProductGridContainer', () => {
  let component: DaffProductGridContainer;
  let fixture: ComponentFixture<DaffProductGridContainer>;
  let store: MockStore<any>;
  let initialLoading: boolean;
  let initialProducts: DaffProduct[];
  const productFactory = new DaffProductFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ DaffProductGridContainer ],
      providers:[
        provideMockStore()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaffProductGridContainer);
    component = fixture.componentInstance;
    store = TestBed.get<Store<any>>(Store);

    initialLoading = false;
    initialProducts = new Array(productFactory.create());

    store.overrideSelector(fromProduct.selectProductGridLoadingState, initialLoading);
    store.overrideSelector(fromProduct.selectAllProducts, initialProducts);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  afterAll(() => {
    store.resetSelectors();
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
