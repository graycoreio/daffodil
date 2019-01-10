import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

import { Cart } from '@daffodil/core';
import { DaffCartFactory, DaffCoreTestingModule } from '@daffodil/core/testing';
import { fromCart , CartLoad, CartLoadSuccess }  from '@daffodil/state';

import { ThankYouGuard } from './thank-you.guard';
import { Router } from '@angular/router';

describe('ThankYouGuard', () => {
  let thankYouGuard: ThankYouGuard;
  let router: Router;
  let cartFactory: DaffCartFactory;
  let stubCart: Cart;
  const stubParam = {
    params: {
      id: "1232123"
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(fromCart.reducers),
        }),
        RouterTestingModule,
        DaffCoreTestingModule
      ],
      providers: [
        ThankYouGuard
      ]
    });

    router = TestBed.get(Router);
    thankYouGuard = TestBed.get(ThankYouGuard);
    cartFactory = TestBed.get(DaffCartFactory);
    stubCart = cartFactory.create();

    spyOn(router, 'navigateByUrl');
  }));

  it('should be created', () => {
    expect(thankYouGuard).toBeTruthy();
  });

  describe('when the cart is null', () => {
  
    beforeEach(() => {
      spyOn(thankYouGuard, 'getCart').and.returnValue(of(null));
    });

    it('should not activate', () => {
      thankYouGuard.canActivate(stubParam).subscribe((activate)=> {
        expect(activate).toEqual(false);
      });
    });
  
    it('should call router.navigateByUrl', () => {
      thankYouGuard.canActivate(stubParam).subscribe((activate) => {
        expect(router.navigateByUrl).toHaveBeenCalledWith('/404');
      });
    });
  });

  describe('when the cart is defined', () => {
    
    beforeEach(() => {
      spyOn(thankYouGuard, 'getCart').and.returnValue(of(stubCart));      
    });

    describe('and id param is not the cart id', () => {
      
      it('should not activate', () => {
        thankYouGuard.canActivate(stubParam).subscribe((activate)=> {
          expect(activate).toEqual(false);
        });
      });
  
      it('should call router.navigateByUrl', () => {
        thankYouGuard.canActivate(stubParam).subscribe((activate) => {
          expect(router.navigateByUrl).toHaveBeenCalledWith('/404');
        });
      });
    });

    describe('and id param is the cart id', () => {
      
      beforeEach(() => {
        stubParam.params.id = stubCart.id.toString();        
      });

      it('should activate', () => {
        thankYouGuard.canActivate(stubParam).subscribe((activate)=> {
          expect(activate).toEqual(true);
        });
      });

      it('should not call router.navigateByUrl', () => {
        thankYouGuard.canActivate(stubParam).subscribe((activate) => {
          expect(router.navigateByUrl).not.toHaveBeenCalledWith('/404');
        });
      });
    });
  })
});
