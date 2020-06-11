import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { DaffCartActionTypes } from '@daffodil/cart';

import { OpenAddToCartNotification, AddToCartNotificationActionTypes, CloseAddToCartNotification } from '../actions/add-to-cart-notification.actions';
import { DaffModalService, DaffModal } from '@daffodil/design';
import { AddToCartNotificationComponent } from '../components/add-to-cart-notification/add-to-cart-notification.component';

@Injectable()
export class AddToCartNotificationEffects {
  private notification: DaffModal<AddToCartNotificationComponent>;

  constructor(
    private actions$: Actions,
    private daffModalService: DaffModalService,
    private store$: Store<any>
  ) {}
    
  @Effect()
  addToCart$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.AddToCartAction),
    map(() => new OpenAddToCartNotification())
  )

  @Effect({dispatch: false})
  openModal$ = this.actions$.pipe(
		ofType(AddToCartNotificationActionTypes.OpenAddToCartNotificationAction),
    tap(() => this.notification = this.daffModalService.open(AddToCartNotificationComponent, {
      onBackdropClicked: () => {
        this.store$.dispatch(new CloseAddToCartNotification());
      }
    })
    )
  )

  @Effect({dispatch: false})
  closeModal$ = this.actions$.pipe(
		ofType(AddToCartNotificationActionTypes.CloseAddToCartNotificationAction),
    map((action) => {
      this.daffModalService.close(this.notification)
    })
  )
}
