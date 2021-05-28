import { ComponentFactoryResolver, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion.component';
import { DesignLandAccordionRoutingModule } from './accordion-routing.module';

import { DaffAccordionModule, DaffArticleModule } from '@daffodil/design';
import { ACCORDION_EXAMPLES } from '@daffodil/design/accordion/examples';
import { createCustomElement } from '@angular/elements';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';


@NgModule({
  declarations: [
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    DesignLandAccordionRoutingModule,
		DesignLandExampleViewerModule,
    DaffAccordionModule,
		DaffArticleModule
  ],
})
export class AccordionModule { 
	constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    ACCORDION_EXAMPLES
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
