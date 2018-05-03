import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Store, StoreModule, combineReducers } from '@ngrx/store';

import { of } from 'rxjs/observable/of';

import { CartContainer } from './cart.component';
import { CartFactory } from '../../testing/factories/cart.factory';
import { Cart } from '../../model/cart';
import { CartLoad } from '../../actions/cart.actions';
import * as fromCart from '../../reducers';

describe('CartContainer', () => {
  let component: CartContainer;
  let fixture: ComponentFixture<CartContainer>;
  let store;
  let initialLoading: boolean;
  let initialCarts: Cart[];
  let cartFactory = new CartFactory();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          carts: combineReducers(fromCart.reducers),
        })
      ],
      declarations: [ CartContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContainer);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    initialLoading = false;
    initialCarts = new Array(cartFactory.create());

    spyOn(fromCart, 'selectCartLoadingState').and.returnValue(initialLoading);
    spyOn(fromCart, 'selectAllCarts').and.returnValue(initialCarts);
    spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngInit', () => {
    
    it('dispatches a CartLoad action', () => {
      expect(store.dispatch).toHaveBeenCalledWith(new CartLoad());
    });

    it('initializes loading$', () => {
      component.loading$.subscribe((loading) => {
        expect(loading).toEqual(initialLoading);
      });
    });

    it('initializes carts$', () => {
      component.carts$.subscribe((carts) => {
        expect(carts).toEqual(initialCarts);
      });
    });
  });

  describe('when carts$ is null', () => {

    beforeEach(() => {
      component.carts$ = of(null);

      fixture.detectChanges();
    });
    
    it('should not render cart', () => {
      expect(fixture.debugElement.query(By.css('cart'))).toBeNull();
    });
  });

  describe('when carts$ is defined', () => {
    
    beforeEach(() => {
      component.carts$ = of(initialCarts);
    });
    
    describe('and loading$ is true', () => {
      
      beforeEach(() => {
        component.loading$ = of(true);

        fixture.detectChanges();
      });

      it('should not render cart', () => {
        expect(fixture.debugElement.query(By.css('cart'))).toBeNull();
      });
    });

    describe('and loading$ is false', () => {
      
      beforeEach(() => {
        component.loading$ = of(false);

        fixture.detectChanges();
      });

      it('should render cart', () => {
        expect(fixture.debugElement.query(By.css('cart'))).toBeDefined();
      });
    });
  });
});
