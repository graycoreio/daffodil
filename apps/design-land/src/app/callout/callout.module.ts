import { NgModule, Injector, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignLandCalloutComponent } from './callout.component';
import { DesignLandCalloutRoutingModule } from './callout-routing.module';

import {
  DaffCalloutModule,
  DaffArticleModule
} from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { createCustomElement } from '@angular/elements';
import { CalloutExamplesModule, CALLOUT_EXAMPLES } from 'libs/design/callout/examples/src';


@NgModule({
  declarations: [
    DesignLandCalloutComponent
  ],
  imports: [
    CommonModule,
    DesignLandCalloutRoutingModule,

    DaffCalloutModule,
    DaffArticleModule,
    DesignLandExampleViewerModule,
    CalloutExamplesModule
  ]
})
export class DesignLandCalloutModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    CALLOUT_EXAMPLES.map((classConstructor) => ({
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
