import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandRadioComponent } from './radio.component';

export const radioIndicatorRoutes: Routes = [
  { path: '', component: DesignLandRadioComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(radioIndicatorRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandRadioRoutingModule {}
