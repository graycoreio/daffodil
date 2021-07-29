import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandImageGalleryComponent } from './image-gallery.component';

export const imagegalleryRoutes: Routes = [
  { path: '', component: DesignLandImageGalleryComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(imagegalleryRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandImageGalleryRoutingModule {}
