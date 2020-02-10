import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DesignLandModalComponent } from './modal.component';

export const modalRoutes: Routes = [
  {path: '', component: DesignLandModalComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(modalRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandModalRoutingModule {}
