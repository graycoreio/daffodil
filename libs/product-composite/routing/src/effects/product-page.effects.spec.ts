import { Component } from '@angular/core';
import {
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { DaffBase64ServiceToken } from '@daffodil/core';
import {
  DaffCompositeProduct,
  DaffProductCompositeSelectionPayload,
} from '@daffodil/product-composite';
import { DaffCompositeProductApplyOption } from '@daffodil/product-composite/state';
import { DaffCompositeProductFactory } from '@daffodil/product-composite/testing';
import { DaffProductPageLoadSuccess } from '@daffodil/product/state';

import { daffProductCompositeRoutingProvideConfig } from '../config/public_api';
import { DaffProductCompositePageEffects } from './product-page.effects';

@Component({ template: '' })
class TestComponent {}

describe('@daffodil/product-composite/routing | DaffProductCompositePageEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffProductCompositePageEffects;
  let router: Router;
  let compositeProductFactory: DaffCompositeProductFactory;

  let selection: DaffProductCompositeSelectionPayload;
  let queryParam: string;
  let product: DaffCompositeProduct;

  beforeEach(() => {
    queryParam = 'queryParam';

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: '**',
            component: TestComponent,
          },
        ]),
      ],
      providers: [
        DaffProductCompositePageEffects,
        provideMockActions(() => actions$),
        daffProductCompositeRoutingProvideConfig({
          compositeSelectionQueryParam: queryParam,
        }),
      ],
    });

    effects = TestBed.inject(DaffProductCompositePageEffects);
    router = TestBed.inject(Router);
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
      beforeEach(fakeAsync(() => {
        const response = {
          id: product.id,
          products: [product],
        };
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        router.navigateByUrl(`/testpath?${queryParam}=${encodeURIComponent(btoa(JSON.stringify(selection)))}`);
        tick();
        actions$ = hot('--a', { a: productLoadSuccessAction });
        expected = cold('--(abc)', {
          a: new DaffCompositeProductApplyOption(product.id, product.items[0].id, product.items[0].options[0].id, product.items[0].options[0].quantity),
          b: new DaffCompositeProductApplyOption(product.id, product.items[0].id, product.items[0].options[1].id, product.items[0].options[1].quantity),
          c: new DaffCompositeProductApplyOption(product.id, product.items[1].id, product.items[1].options[0].id, product.items[1].options[0].quantity),
        });
      }));

      it('should apply the composite product options specified', () => {
        expect(effects.preselectCompositeOptions$).toBeObservable(expected);
      });
    });

    describe('when called with a route with no set query param', () => {
      beforeEach(fakeAsync(() => {
        router.navigateByUrl(`/testpath?some_other_query_param=${encodeURIComponent(queryParam)}`);
        tick();
        const response = {
          id: product.id,
          products: [product],
        };
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        actions$ = hot('--a', { a: productLoadSuccessAction });
        expected = cold('---');
      }));

      it('should not apply any composite product options', () => {
        expect(effects.preselectCompositeOptions$).toBeObservable(expected);
      });
    });

    describe('when called with a route with junk set as the query param', () => {
      beforeEach(fakeAsync(() => {
        router.navigateByUrl(`/testpath?${queryParam}=iamjunkanddonotdecodetoanythingworthwhile`);
        tick();
        const response = {
          id: product.id,
          products: [product],
        };
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        actions$ = hot('--a', { a: productLoadSuccessAction });
        expected = cold('---');
      }));

      it('should not error or apply any composite product options', () => {
        expect(effects.preselectCompositeOptions$).toBeObservable(expected);
      });
    });

    describe('when called with a route with nothing set as the query param', () => {
      beforeEach(fakeAsync(() => {
        router.navigateByUrl(`/testpath?${queryParam}=`);
        tick();
        const response = {
          id: product.id,
          products: [product],
        };
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        actions$ = hot('--a', { a: productLoadSuccessAction });
        expected = cold('---');
      }));

      it('should not error or apply any composite product options', () => {
        expect(effects.preselectCompositeOptions$).toBeObservable(expected);
      });
    });

    describe('when called with a route with an invalid selection set as the query param', () => {
      beforeEach(fakeAsync(() => {
        router.navigateByUrl(`/testpath?${queryParam}=${encodeURIComponent(btoa(JSON.stringify({
          somerandomid: ['iamnotanoptionid'],
        })))}`);
        tick();
        const response = {
          id: product.id,
          products: [product],
        };
        const productLoadSuccessAction = new DaffProductPageLoadSuccess(response);
        actions$ = hot('--a', { a: productLoadSuccessAction });
        expected = cold('---');
      }));

      it('should not error or apply any composite product options', () => {
        expect(effects.preselectCompositeOptions$).toBeObservable(expected);
      });
    });
  });
});
