import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import { DaffCartActionTypes } from '@daffodil/cart';

import { 
  OpenAddToCartNotification, 
  AddToCartNotificationActionTypes, 
  CloseAddToCartNotification 
} from '../actions/add-to-cart-notification.actions';

import { DaffModalService } from '@daffodil/design';

import { AddToCartNotificationComponent } from '../containers/add-to-cart-notification/add-to-cart-notification.component';
import { Store } from '@ngrx/store';

@Injectable()
export class AddToCartNotificationEffects {

  constructor(
    private modalService: DaffModalService, 
    private store: Store<any>,
    private actions$: Actions
  ){}
    
  @Effect()
  addToCart$ = this.actions$.pipe(
    ofType(DaffCartActionTypes.AddToCartAction),
    map(() => new OpenAddToCartNotification())
  )

  @Effect({dispatch: false})
  openNotification = this.actions$.pipe(
    ofType(AddToCartNotificationActionTypes.OpenAddToCartNotificationAction),
    tap(() => 
    this.modalService.open(AddToCartNotificationComponent, {
      modal: {
        horizontalPosition: 'center',
        verticalPosition: 'center'
      },
      backdrop: {
        onBackdropClicked: () => {
          this.store.dispatch(new CloseAddToCartNotification)
        }
      }
    })
    )
  )

  @Effect({dispatch: false})
  closeNotification = this.actions$.pipe(
    ofType(AddToCartNotificationActionTypes.CloseAddToCartNotificationAction),
    tap(() => this.modalService.close())
  )
}
