import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandToastComponent } from './toast.component';

export const toastRoutes: Routes = [
  { path: '', component: DesignLandToastComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(toastRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandToastRoutingModule {}
