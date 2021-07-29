import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandPaginatorComponent } from './paginator.component';

export const loadingRoutes: Routes = [
  { path: '', component: DesignLandPaginatorComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(loadingRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandPaginatorRoutingModule {}
