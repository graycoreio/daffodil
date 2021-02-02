import { NgModule, Injector, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

import { HeroComponent } from './hero.component';
import { DesignLandHeroRoutingModule } from './hero-routing.module';

import {
  DaffArticleModule,
  DaffHeroModule
} from '@daffodil/design';

import { HERO_EXAMPLES, HeroExamplesModule } from 'libs/design/hero/examples/src';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';

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
    HeroExamplesModule
  ]
})
export class DesignLandHeroModule {
  constructor(
    injector: Injector, 
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    HERO_EXAMPLES
      .map((classConstructor) => {
        return {
          element: createCustomElement(classConstructor, {injector}),
          class: classConstructor
        }
      })
      .map((customElement) => {
        // Register the custom element with the browser.
        customElements.define(
          this.componentFactoryResolver.resolveComponentFactory<unknown>(customElement.class).selector + '-example',
          customElement.element
        );
      });
  }
}
