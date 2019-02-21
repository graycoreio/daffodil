import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';

export const buttonRoutes: Routes = [
  {path: '', component: ButtonComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(buttonRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandButtonRoutingModule {}
