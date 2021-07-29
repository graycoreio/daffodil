import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandButtonComponent } from './button.component';

export const buttonRoutes: Routes = [
  { path: '', component: DesignLandButtonComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(buttonRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandButtonRoutingModule {}
