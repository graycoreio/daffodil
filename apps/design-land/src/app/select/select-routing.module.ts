import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandSelectComponent } from './select.component';

export const selectRoutes: Routes = [
  { path: '', component: DesignLandSelectComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(selectRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandSelectRoutingModule {}
