import { CommonModule } from '@angular/common';
import {
  NgModule,
  Injector,
  ComponentFactoryResolver,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';


import {
  DaffButtonSetModule,
  DaffButtonModule,
  DaffArticleModule,
} from '@daffodil/design';
import { BUTTON_EXAMPLES } from '@daffodil/design/button/examples';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule,

    DesignLandButtonRoutingModule,
    DesignLandExampleViewerModule,
    DaffButtonSetModule,
    DaffButtonModule,
    DaffArticleModule,
  ],
})
export class ButtonModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    BUTTON_EXAMPLES
      .map((classConstructor) => ({
        element: createCustomElement(classConstructor, { injector }),
        class: classConstructor,
      }))
      .map((customElement) => {
        // Register the custom element with the browser.
        customElements.define(
          this.componentFactoryResolver.resolveComponentFactory<unknown>(customElement.class).selector + '-example',
          customElement.element,
        );
      });
  }
}
