import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { DaffProductPageLoadSuccess } from '@daffodil/product/state';
import {
  DaffCompositeProduct,
  DaffProductCompositeSelectionPayload,
} from '@daffodil/product-composite';
import { DaffCompositeProductApplyOption } from '@daffodil/product-composite/state';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';

import { DaffProductCompositePageEffects } from './product-page.effects';
import { provideDaffProductCompositeRoutingConfig } from '../config/public_api';
import { DaffProductCompositeQueryParamService } from '../services/query-param.service';

@Component({
  template: '',
  standalone: false,
})
class TestComponent {}

describe('@daffodil/product-composite/routing | DaffProductCompositePageEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffProductCompositePageEffects;
  let compositeProductFactory: DaffCompositeProductFactory;

  let selection: DaffProductCompositeSelectionPayload;
  let queryParam: string;
  let product: DaffCompositeProduct;
  let param: string;

  beforeEach(() => {
    queryParam = 'queryParam';

    TestBed.configureTestingModule({
      providers: [
        DaffProductCompositePageEffects,
        provideMockActions(() => actions$),
        provideDaffProductCompositeRoutingConfig({
          compositeSelectionQueryParam: queryParam,
        }),
        {
          provide: DaffProductCompositeQueryParamService,
          useValue: {
            get: () => param,
          },
        },
      ],
    });

    effects = TestBed.inject(DaffProductCompositePageEffects);
    compositeProductFactory = TestBed.inject(DaffCompositeProductFactory);

    product = compositeProductFactory.create();
    selection = {
      [product.items[0].id]: [product.items[0].options[0].id, product.items[0].options[1].id],
      [product.items[1].id]: [product.items[1].options[0].id],
    };
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ProductPageLoadSuccessAction is triggered', () => {
    let expected;

    describe('when called with a route with a set query param', () => {
      beforeEach(() => {
        const response = {
          id: product.id,
          products: [product],
        };
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        param = `${btoa(JSON.stringify(selection))}`;

        actions$ = hot('--a', { a: productLoadSuccessAction });
        expected = cold('--(abc)', {
          a: new DaffCompositeProductApplyOption(product.id, product.items[0].id, product.items[0].options[0].id, product.items[0].options[0].quantity),
          b: new DaffCompositeProductApplyOption(product.id, product.items[0].id, product.items[0].options[1].id, product.items[0].options[1].quantity),
          c: new DaffCompositeProductApplyOption(product.id, product.items[1].id, product.items[1].options[0].id, product.items[1].options[0].quantity),
        });
      });

      it('should apply the composite product options specified', () => {
        expect(effects.preselectCompositeOptions$).toBeObservable(expected);
      });
    });

    describe('when called with a route with no set query param', () => {
      beforeEach(() => {
        param = ``;
        const response = {
          id: product.id,
          products: [product],
        };
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        actions$ = hot('--a', { a: productLoadSuccessAction });
        expected = cold('---');
      });

      it('should not apply any composite product options', () => {
        expect(effects.preselectCompositeOptions$).toBeObservable(expected);
      });
    });

    describe('when called with a route with junk set as the query param', () => {
      beforeEach(() => {
        param = `iamjunkanddonotdecodetoanythingworthwhile`;
        const response = {
          id: product.id,
          products: [product],
        };
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        actions$ = hot('--a', { a: productLoadSuccessAction });
        expected = cold('---');
      });

      it('should not error or apply any composite product options', () => {
        expect(effects.preselectCompositeOptions$).toBeObservable(expected);
      });
    });

    describe('when called with a route with nothing set as the query param', () => {
      beforeEach(() => {
        param = ``;

        const response = {
          id: product.id,
          products: [product],
        };
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        actions$ = hot('--a', { a: productLoadSuccessAction });
        expected = cold('---');
      });

      it('should not error or apply any composite product options', () => {
        expect(effects.preselectCompositeOptions$).toBeObservable(expected);
      });
    });

    describe('when called with a route with an invalid selection set as the query param', () => {
      beforeEach(() => {
        param = `${btoa(JSON.stringify({
          somerandomid: ['iamnotanoptionid'],
        }))}`;

        const response = {
          id: product.id,
          products: [product],
        };
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        actions$ = hot('--a', { a: productLoadSuccessAction });
        expected = cold('---');
      });

      it('should not error or apply any composite product options', () => {
        expect(effects.preselectCompositeOptions$).toBeObservable(expected);
      });
    });
  });
});
