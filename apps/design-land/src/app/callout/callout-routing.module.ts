import {
  Routes,
  RouterModule,
} from '@angular/router';
import { NgModule } from '@angular/core';
import { DesignLandCalloutComponent } from './callout.component';

export const calloutRoutes: Routes = [
  { path: '', component: DesignLandCalloutComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(calloutRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandCalloutRoutingModule {}
