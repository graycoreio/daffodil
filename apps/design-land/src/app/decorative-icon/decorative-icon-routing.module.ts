import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandDecorativeIconComponent } from './decorative-icon.component';

export const decorativeIconRoutes: Routes = [
  { path: '', component: DesignLandDecorativeIconComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(decorativeIconRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandDecorativeIconRoutingModule {}
