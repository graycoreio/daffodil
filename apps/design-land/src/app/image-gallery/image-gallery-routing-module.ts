import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ImageGalleryComponent } from './image-gallery.component';

export const imagegalleryRoutes: Routes = [
  {path: '', component: ImageGalleryComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(imagegalleryRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandImageGalleryRoutingModule {}
