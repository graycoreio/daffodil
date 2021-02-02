import { CommonModule } from '@angular/common';
import {
  ComponentFactoryResolver,
  Injector,
  NgModule,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import {
  DaffArticleModule,
  DaffLoadingIconModule,
} from '@daffodil/design';
import { LOADING_ICON_EXAMPLES } from '@daffodil/design/loading-icon/examples';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandLoadingIconRoutingModule } from './loading-icon-routing.module';
import { LoadingIconComponent } from './loading-icon.component';

@NgModule({
  declarations: [
    LoadingIconComponent,
  ],
  imports: [
    CommonModule,
    DaffArticleModule,
    DaffLoadingIconModule,
    DesignLandExampleViewerModule,
    DesignLandLoadingIconRoutingModule,
  ],
})
export class LoadingIconModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    console.log(LOADING_ICON_EXAMPLES);
    LOADING_ICON_EXAMPLES.map((classConstructor) => ({
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
