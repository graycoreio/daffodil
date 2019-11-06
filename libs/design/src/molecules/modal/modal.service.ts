import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Type, ComponentRef } from '@angular/core';
import { DomPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { DaffModalModule } from './modal.module';
import { DaffBackdropComponent } from '../backdrop/public_api';
import { DaffModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: DaffModalModule
})
export class DaffModalService {
  private _portalOutlet: DomPortalOutlet;

  constructor(
    private cfr: ComponentFactoryResolver,
    private ar: ApplicationRef,
    private injector: Injector,
    private overlay
  ) {
    this._portalOutlet = new DomPortalOutlet(
      document.body,
      this.cfr,
      this.ar,
      this.injector
    );
  }

  private _createBackdrop(): ComponentRef<DaffBackdropComponent> {
    return this._portalOutlet.attachComponentPortal(new ComponentPortal(DaffBackdropComponent));
  }

  open(component: Type<any>): void {
    this._portalOutlet.attachComponentPortal(new ComponentPortal())
  }
}