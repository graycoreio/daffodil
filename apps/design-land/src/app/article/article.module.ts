import { NgModule, Injector, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';


import { DesignLandArticleComponent } from './article.component';
import { DesignLandArticleRoutingModule } from './article-routing.module';

import { DaffArticleModule } from '@daffodil/design';
import { ARTICLE_EXAMPLES } from './examples/public_api';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandArticleComponent,
    ...ARTICLE_EXAMPLES
  ],
  imports: [
    CommonModule,
    DesignLandArticleRoutingModule,
    CommonModule,
    DaffArticleModule,
    DesignLandExampleViewerModule,

  ],
  entryComponents: [
    ...ARTICLE_EXAMPLES
  ]
})
export class DesignLandArticleModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    ARTICLE_EXAMPLES.map((classConstructor) => {
      return {
        element: createCustomElement(classConstructor, { injector }),
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