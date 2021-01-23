import { ComponentFactoryResolver, Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIconComponent } from './loading-icon.component';

import { DaffArticleModule, DaffLoadingIconModule } from '@daffodil/design';
import { LOADING_ICON_EXAMPLES } from '@daffodil/design/loading-icon/examples';

import { DesignLandLoadingIconRoutingModule } from './loading-icon-routing.module';
import { createCustomElement } from '@angular/elements';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

@NgModule({
  declarations: [
    LoadingIconComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DaffLoadingIconModule,
    DesignLandExampleViewerModule,
    DesignLandLoadingIconRoutingModule
  ]
})
export class LoadingIconModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    console.log(LOADING_ICON_EXAMPLES);
    LOADING_ICON_EXAMPLES.map((classConstructor) => {
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
