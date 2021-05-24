import {
  Routes,
  RouterModule,
} from '@angular/router';
import { NgModule } from '@angular/core';
import { DesignLandTextAreaComponent } from './text-area.component';

export const formRoutes: Routes = [
  { path: '', component: DesignLandTextAreaComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(formRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandTextAreaRoutingModule {}
