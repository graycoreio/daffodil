import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandLinkSetComponent } from './link-set.component';

export const linkSetRoutes: Routes = [
  { path: '', component: DesignLandLinkSetComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(linkSetRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandLinkSetRoutingModule {}
