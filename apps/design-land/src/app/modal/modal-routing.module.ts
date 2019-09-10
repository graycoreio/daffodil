import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';

export const modalRoutes: Routes = [
  {path: '', component: ModalComponent}
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
