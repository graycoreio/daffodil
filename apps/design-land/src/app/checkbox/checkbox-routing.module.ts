import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';

export const checkboxRoutes: Routes = [
  {path: '', component: CheckboxComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(checkboxRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandCheckboxRoutingModule {}
