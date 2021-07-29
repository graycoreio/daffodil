import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandTypographyComponent } from './typography.component';

export const typographyRoutes: Routes = [
  { path: '', component: DesignLandTypographyComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(typographyRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandTypographyRoutingModule {}
