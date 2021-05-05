import { CommonModule } from '@angular/common';
import {
  NgModule,
  Injector,
  ComponentFactoryResolver,
  Type,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import {
  DaffCalloutModule,
  DaffArticleModule,
} from '@daffodil/design';
import { CALLOUT_EXAMPLES } from '@daffodil/design/callout/examples';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandCalloutRoutingModule } from './callout-routing.module';
import { DesignLandCalloutComponent } from './callout.component';


@NgModule({
  declarations: [
    DesignLandCalloutComponent,
  ],
  imports: [
    CommonModule,
    DesignLandCalloutRoutingModule,

    DaffCalloutModule,
    DaffArticleModule,
    DesignLandExampleViewerModule,
  ],
})
export class DesignLandCalloutModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    CALLOUT_EXAMPLES.map((classConstructor: Type<unknown>) => ({
      element: createCustomElement(classConstructor, { injector }),
      class: classConstructor,
    }))
      .map((customElement) => {
        // Register the custom element with the browser.
        customElements.define(
          this.componentFactoryResolver.resolveComponentFactory(customElement.class).selector + '-example',
          customElement.element,
        );
      });
  }
}
