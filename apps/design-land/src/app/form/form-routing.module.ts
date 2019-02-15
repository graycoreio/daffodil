import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormComponent } from './form.component';

export const formRoutes: Routes = [
  {path: '', component: FormComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(formRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandFormRoutingModule {}
