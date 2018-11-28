import {
  Component,
  AfterViewInit,
  ComponentFactoryResolver,
  Injector,
  ApplicationRef,
  ViewContainerRef,
  ViewChild,
  OnDestroy,
  TemplateRef
} from '@angular/core';
import {
  DomPortalHost,
  TemplatePortal,
  PortalHost
} from '@angular/cdk/portal';

@Component({
  selector: 'modal-portal',
  template: `
  <ng-template #contentRef>
    <ng-content></ng-content>
  </ng-template>
  `,
  styles: []
})
export class ModalPortalComponent implements AfterViewInit, OnDestroy {
  private portalHost: PortalHost;
  @ViewChild('contentRef') contentRef: TemplateRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit(): void {
    // Create a portalHost from template.html element
    this.portalHost = new DomPortalHost(
      document.querySelector('#modal-portal'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    // Create a portal from ng-template
    const modalPortal = new TemplatePortal(
      this.contentRef,
      this.viewContainerRef
    );

    // Attach portal to host
    this.portalHost.attach(modalPortal);
  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }
}