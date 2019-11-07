import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoAddToCartNotificationStateModule } from './add-to-cart-notification-state.module';
import { ProductAddedComponent } from './components/product-added/product-added.component';
import { AddToCartNotificationComponent } from './containers/add-to-cart-notification/add-to-cart-notification.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffModalModule, DaffLoadingIconModule, DaffButtonModule, DaffModalService } from '@daffodil/design';
import { Store, select } from '@ngrx/store';
import { selectOpen } from './selectors/add-to-cart-notification.selector';
import { CloseAddToCartNotification } from './actions/add-to-cart-notification.actions';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffModalModule,
    DaffButtonModule,
    DaffLoadingIconModule,
    DemoAddToCartNotificationStateModule
  ],
  declarations: [
    ProductAddedComponent,
    AddToCartNotificationComponent
  ],
  entryComponents: [
    AddToCartNotificationComponent
  ]
})
export class DemoAddToCartNotificationModule {
  constructor(private modalService: DaffModalService, private store: Store<any>){
    this.store.pipe(select(selectOpen)).subscribe((open) => {
      open 
        ? this.modalService.open(AddToCartNotificationComponent, {
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
        : this.modalService.close();
    })
  }

  static forRoot(): ModuleWithProviders<DemoAddToCartNotificationModule>{
    return {
      ngModule: DemoAddToCartNotificationModule
    }
  }
}
