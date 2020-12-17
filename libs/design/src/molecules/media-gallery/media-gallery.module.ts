import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffMediaGalleryComponent } from './media-gallery.component';
import { DaffMediaDirective } from './media/media.directive';
import { DaffMediaRendererComponent } from './media-renderer/media-renderer.component';

@NgModule({
  declarations: [
    DaffMediaGalleryComponent,
    DaffMediaDirective,
    DaffMediaRendererComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DaffMediaDirective,
    DaffMediaGalleryComponent
  ]
})
export class DaffMediaGalleryModule { }
