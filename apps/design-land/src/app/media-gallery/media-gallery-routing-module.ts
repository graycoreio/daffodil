import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MediaGalleryComponent } from './media-gallery.component';

export const mediaGalleryRoutes: Routes = [
  {path: '', component: MediaGalleryComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(mediaGalleryRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandMediaGalleryRoutingModule {}
