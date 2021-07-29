import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandFormComponent } from './form.component';

export const formRoutes: Routes = [
  { path: '', component: DesignLandFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(formRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandFormRoutingModule {}
