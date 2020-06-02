import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { DaffCartFacade } from '../../facades/cart/cart.facade';

@Injectable()
export class DaffShippingMethodGuard implements CanActivate {
  constructor(private facade: DaffCartFacade) {}

  canActivate(): Observable<boolean> {
    return this.facade.hasShippingMethod$
  }
}
