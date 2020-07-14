import { NgModule, Injector, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { ButtonComponent } from './button.component';
import { DesignLandButtonRoutingModule } from './button-routing.module';

import {
  DaffButtonSetModule,
  DaffButtonModule,
  DaffArticleModule
} from '@daffodil/design';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

import { BUTTON_EXAMPLES, ButtonExamplesModule } from '@daffodil/design/button/examples';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,

    DesignLandButtonRoutingModule,
    DesignLandExampleViewerModule,
    DaffButtonSetModule,
    DaffButtonModule,
    DaffArticleModule,
    ButtonExamplesModule
  ]
})
export class ButtonModule {
  constructor(
    injector: Injector, 
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    BUTTON_EXAMPLES
      .map((classConstructor) => {
        return {
          element: createCustomElement(classConstructor, {injector}),
          class: classConstructor
        }
      })
      .map((customElement) => {
        // Register the custom element with the browser.
        customElements.define(
          this.componentFactoryResolver.resolveComponentFactory<unknown>(customElement.class).selector + '-example',
          customElement.element
        );
      });
  }
}
