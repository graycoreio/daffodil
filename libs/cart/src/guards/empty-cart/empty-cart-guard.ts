import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { DaffCartFacade } from '../../facades/cart/cart.facade';

@Injectable()
export class DaffEmptyCartGuard implements CanActivate {
  constructor(private facade: DaffCartFacade) {}

  canActivate(): Observable<boolean> {
    return this.facade.isCartEmpty$.pipe(map(isCartEmpty => !isCartEmpty));
  }
}
