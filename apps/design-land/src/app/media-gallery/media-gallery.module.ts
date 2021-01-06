import { NgModule, Injector, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';


import { DaffMediaGalleryModule, DaffImageModule } from '@daffodil/design';
import { MEDIA_GALLERY_EXAMPLES } from '@daffodil/design/media-gallery/examples';

import { DesignLandMediaGalleryRoutingModule } from './media-gallery-routing-module';
import { MediaGalleryComponent } from './media-gallery.component';
import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';


@NgModule({
  declarations: [
    MediaGalleryComponent,
    ...MEDIA_GALLERY_EXAMPLES
  ],
  imports: [
    CommonModule,
    DesignLandMediaGalleryRoutingModule,
    DesignLandExampleViewerModule,

    DaffMediaGalleryModule,
    DaffImageModule
  ],
  entryComponents: [
    ...MEDIA_GALLERY_EXAMPLES
  ]
})
export class MediaGalleryModule {
  constructor(
    injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    MEDIA_GALLERY_EXAMPLES.map((classConstructor) => {
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
