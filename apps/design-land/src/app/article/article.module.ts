import { NgModule, Injector, ComponentFactoryResolver, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignLandArticleComponent } from './article.component';
import { DesignLandArticleRoutingModule } from './article-routing.module';

import { DaffArticleModule } from '@daffodil/design';

import { ARTICLE_EXAMPLES } from './examples/examples';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    DesignLandArticleComponent,
    ...ARTICLE_EXAMPLES
  ],
  imports: [
    CommonModule,
    DesignLandArticleRoutingModule,
    DesignLandExampleViewerModule,
    DaffArticleModule
  ],
  entryComponents: ARTICLE_EXAMPLES,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DesignLandArticleModule {
  constructor(
    injector: Injector, 
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    ARTICLE_EXAMPLES
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
