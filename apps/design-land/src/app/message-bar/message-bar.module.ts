import { NgModule, Injector, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { DesignLandMessageBarComponent } from './message-bar.component';
import { DesignLandMessageBarRoutingModule } from './message-bar-routing.module';

import {
  DaffArticleModule,
  DaffMessageBarModule,
  DaffButtonModule
} from '@daffodil/design';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

import { MESSAGEBAR_EXAMPLES, MessageBarExamplesModule } from '@daffodil/design/message-bar/examples';

@NgModule({
  declarations: [
    DesignLandMessageBarComponent
  ],
  imports: [
    CommonModule,

    DesignLandMessageBarRoutingModule,
    DaffArticleModule,
    DaffMessageBarModule,
    DaffButtonModule,
    FontAwesomeModule,
    DesignLandExampleViewerModule,
    MessageBarExamplesModule
  ]
})
export class DesignLandMessageBarModule {
  constructor(
    injector: Injector, 
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    MESSAGEBAR_EXAMPLES
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
