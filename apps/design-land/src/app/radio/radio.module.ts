import { NgModule, ComponentFactoryResolver, Injector } from '@angular/core';
import { DaffRadioModule, DaffButtonModule } from '@daffodil/design';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RadioComponent } from './radio.component';
import { DesignLandRadioRoutingModule } from './radio-routing.module';
import { RADIO_EXAMPLES } from '@daffodil/design/radio/examples';
import { createCustomElement, NgElementConstructor } from '@angular/elements';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';



export interface CustomClassElement<T> {
  element: NgElementConstructor<T>,
  class: T
}

@NgModule({
  declarations: [
    RadioComponent,
    ...RADIO_EXAMPLES
  ],
  imports: [
    DesignLandExampleViewerModule,
    DesignLandRadioRoutingModule,
    DaffRadioModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  entryComponents: [
    ...RADIO_EXAMPLES
  ]
})
export class RadioModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    RADIO_EXAMPLES
      .map((classConstructor) => {
        return {
          element: createCustomElement(classConstructor, { injector }),
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