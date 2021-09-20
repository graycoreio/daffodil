import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandVariablesComponent } from './variables.component';

export const variablesRoutes: Routes = [
  { path: '', component: DesignLandVariablesComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(variablesRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandVariablesRoutingModule {}
