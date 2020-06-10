import { NgModule, Injector, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';
import { DesignLandCardRoutingModule } from './card-routing.module';

import {
  DaffCardModule,
  DaffImageModule
} from '@daffodil/design';

import { CARD_EXAMPLES, CardExamplesModule } from '@daffodil/design/card/examples';
import { createCustomElement } from '@angular/elements';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    DesignLandCardRoutingModule,
    DesignLandExampleViewerModule,
    ReactiveFormsModule,
    DaffCardModule,
    DaffImageModule,
    CardExamplesModule
  ]
})
export class CardModule { 

  constructor(
    injector: Injector, 
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    CARD_EXAMPLES
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
