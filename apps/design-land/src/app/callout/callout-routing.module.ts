import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CalloutComponent } from './callout.component';

export const calloutRoutes: Routes = [
  {path: '', component: CalloutComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(calloutRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandCalloutRoutingModule {}
