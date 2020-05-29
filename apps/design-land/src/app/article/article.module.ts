import { NgModule, Injector, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';


import { DesignLandArticleComponent } from './article.component';
import { DesignLandArticleRoutingModule } from './article-routing.module';

import { DaffArticleModule } from '@daffodil/design';
import { ArticleExamplesModule, ARTICLE_EXAMPLES } from '@daffodil/design/article/examples';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    DesignLandArticleComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DesignLandArticleRoutingModule,
    DesignLandExampleViewerModule,
    ArticleExamplesModule
  ],
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