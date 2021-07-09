import { CommonModule } from '@angular/common';
import {
  ComponentFactoryResolver,
  Injector,
  NgModule,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffArticleModule,
  DaffQuantityFieldModule,
} from '@daffodil/design';
import { QUANTITY_FIELD_EXAMPLES } from '@daffodil/design/quantity-field/examples';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandQuantityFieldRoutingModule } from './quantity-field-routing.module';
import { DesignLandQuantityFieldComponent } from './quantity-field.component';

@NgModule({
  declarations: [
    DesignLandQuantityFieldComponent,
    ...QUANTITY_FIELD_EXAMPLES,
  ],
  imports: [
    CommonModule,
    DesignLandExampleViewerModule,
    ReactiveFormsModule,
    DaffArticleModule,
    DaffQuantityFieldModule,
    DesignLandQuantityFieldRoutingModule,
  ],
})
export class DesignLandQuantityFieldModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    QUANTITY_FIELD_EXAMPLES
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
