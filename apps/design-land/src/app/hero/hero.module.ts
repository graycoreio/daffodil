import { CommonModule } from '@angular/common';
import {
  NgModule,
  Injector,
  ComponentFactoryResolver,
  Type,
} from '@angular/core';
import { createCustomElement } from '@angular/elements';

import {
  DaffArticleModule,
  DaffHeroModule,
} from '@daffodil/design';
import { HERO_EXAMPLES } from '@daffodil/design/hero/examples';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandHeroRoutingModule } from './hero-routing.module';
import { HeroComponent } from './hero.component';


@NgModule({
  declarations: [
    HeroComponent,
  ],
  imports: [
    CommonModule,
    DesignLandHeroRoutingModule,
    DesignLandExampleViewerModule,

    DaffArticleModule,
    DaffHeroModule,
  ],
})
export class DesignLandHeroModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    HERO_EXAMPLES.map((classConstructor: Type<unknown>) => ({
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
