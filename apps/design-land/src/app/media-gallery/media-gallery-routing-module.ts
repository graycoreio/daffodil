import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandMediaGalleryComponent } from './media-gallery.component';

export const mediaGalleryRoutes: Routes = [
  { path: '', component: DesignLandMediaGalleryComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(mediaGalleryRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandMediaGalleryRoutingModule {}
