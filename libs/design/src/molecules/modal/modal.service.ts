import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, Type, ComponentRef } from '@angular/core';
import { DomPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { DaffModalModule } from './modal.module';
import { DaffBackdropComponent } from '../backdrop/public_api';
import { DaffModalComponent, DaffModalConfiguration } from './modal/modal.component';

@Injectable({
  providedIn: DaffModalModule
})
export class DaffModalService {
  private _portalOutlet: DomPortalOutlet;
  private _overlayElement: HTMLElement;
  private _backdropPortal: ComponentPortal<DaffBackdropComponent>;
  private _modalPortal: ComponentPortal<DaffModalComponent>
  private _backdrop: ComponentRef<DaffBackdropComponent>;
  private _modal: ComponentRef<DaffModalComponent>;

  constructor(
    private cfr: ComponentFactoryResolver,
    private ar: ApplicationRef,
    private injector: Injector
  ) {
    this._overlayElement = document.createElement("div");
    this._overlayElement.classList.add("daff-overlay-container"); 
    this._portalOutlet = new DomPortalOutlet(
      this._overlayElement,
      this.cfr,
      this.ar,
      this.injector
    );
    this._backdropPortal = new ComponentPortal(DaffBackdropComponent);
    this._modalPortal = new ComponentPortal(DaffModalComponent);
  }

  private _createBackdrop(configuration): ComponentRef<DaffBackdropComponent> {
    const backdrop = this._portalOutlet.attachComponentPortal(this._backdropPortal);
    backdrop.instance.fullscreen = true;
    backdrop.instance.backdropClicked.subscribe(() => configuration.onBackdropClicked())
    return backdrop;
  }

  private _createModal(component: Type<any>, configuration: DaffModalConfiguration): ComponentRef<DaffModalComponent> {
    const modal = this._portalOutlet.attachComponentPortal(this._modalPortal);
    modal.instance.horizontalPosition = configuration.horizontalPosition;
    modal.instance.verticalPosition = configuration.verticalPosition;
    modal.instance.open = true;
    modal.instance.attachContent(new ComponentPortal(component));
    return modal;
  }

  open(component: Type<any>, configuration: { modal?: DaffModalConfiguration, backdrop?: any} = {}): void {
    document.body.append(this._overlayElement);
    this._backdrop = this._createBackdrop(configuration.backdrop);
    this._modal = this._createModal(component, configuration.modal);
  }

  close(): void {
    if(this._portalOutlet && this._modal && this._backdrop) {
      this._modal.instance.open = false;
      this._modal.instance.animationCompleted.subscribe(() => {
        this._overlayElement.remove();
        this._modal.destroy();
        this._backdrop.destroy();
        this._portalOutlet.detach();
      });
    } 
  }
}