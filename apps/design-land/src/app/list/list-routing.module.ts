import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';

export const listRoutes: Routes = [
  {path: '', component: ListComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(listRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandListRoutingModule {}
