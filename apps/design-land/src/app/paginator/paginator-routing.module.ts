import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './paginator.component';

export const loadingRoutes: Routes = [
  {path: '', component: PaginatorComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(loadingRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandPaginatorRoutingModule {}
