import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandTagComponent } from './tag.component';

export const tagRoutes: Routes = [
  { path: '', component: DesignLandTagComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(tagRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandTagRoutingModule {}
