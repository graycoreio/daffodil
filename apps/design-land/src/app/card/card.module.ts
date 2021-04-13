import { CommonModule } from '@angular/common';
import {
  NgModule,
  Injector,
  ComponentFactoryResolver,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffArticleModule,
  DaffCardModule,
  DaffImageModule,
} from '@daffodil/design';
import { CARD_EXAMPLES } from '@daffodil/design/card/examples';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandCardRoutingModule } from './card-routing.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    DesignLandCardRoutingModule,
    DesignLandExampleViewerModule,
    ReactiveFormsModule,
    DaffArticleModule,
    DaffCardModule,
    DaffImageModule,
  ],
})
export class CardModule {

  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    CARD_EXAMPLES
      .map((classConstructor) => ({
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
