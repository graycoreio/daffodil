import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffProduct } from '@daffodil/product';

@Injectable({providedIn: 'root'})
export class MockDaffBestSellersFacade implements DaffStoreFacade<Action> {
  loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  bestSellers$: BehaviorSubject<DaffProduct[]> = new BehaviorSubject([]);

  dispatch(action: Action) {}
}
