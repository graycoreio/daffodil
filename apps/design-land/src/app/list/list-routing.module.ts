import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DesignLandListComponent } from './list.component';

export const listRoutes: Routes = [
  {path: '', component: DesignLandListComponent}
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
