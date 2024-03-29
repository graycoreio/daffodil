import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandContainerComponent } from './container.component';

export const containerRoutes: Routes = [
  { path: '', component: DesignLandContainerComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(containerRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandContainerRoutingModule {}
