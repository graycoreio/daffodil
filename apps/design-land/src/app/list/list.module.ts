import { NgModule, Injector, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { DesignLandListRoutingModule } from './list-routing.module';

import { DesignLandListComponent } from './list.component';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

import {
  DaffArticleModule,
  DaffListModule
} from '@daffodil/design';

import {
  ListExamplesModule,
  LIST_EXAMPLES
} from '@daffodil/design/list/examples';

@NgModule({
  declarations: [
    DesignLandListComponent
  ],
  imports: [
    CommonModule,
    DesignLandListRoutingModule,
    DaffArticleModule,
    DaffListModule,

    DesignLandExampleViewerModule,
    ListExamplesModule
  ]
})
export class DesignLandListModule {
  constructor(
    injector: Injector, 
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    LIST_EXAMPLES
      .map((classConstructor) => {
        return {
          element: createCustomElement(classConstructor, {injector}),
          class: classConstructor
        }
      })
      .map((customElement) => {
        // Register the custom element with the browser.
        customElements.define(
          this.componentFactoryResolver.resolveComponentFactory(customElement.class).selector + '-example', 
          customElement.element
        );
      });
  }
}
