import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandTreeComponent } from './tree.component';

export const treeRoutes: Routes = [
  { path: '', component: DesignLandTreeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(treeRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandTreeRoutingModule {}
