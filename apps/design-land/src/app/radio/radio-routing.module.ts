import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RadioComponent } from './radio.component';

export const radioIndicatorRoutes: Routes = [
  {path: '', component: RadioComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(radioIndicatorRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandRadioRoutingModule {}
