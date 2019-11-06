import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Type } from '@angular/core';
import { DomPortalOutlet, ComponentPortal } from '@angular/cdk/portal';

import { AddToCartNotificationComponent } from '../containers/add-to-cart-notification/add-to-cart-notification.component';

import { DaffModalService } from '@daffodil/design';

@Injectable()
export class DemoAddToCartNotificationService {
  
  constructor(private modalService: DaffModalService){
    this.modalService.open(AddToCartNotificationComponent);
  }
}