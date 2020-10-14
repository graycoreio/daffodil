import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DesignLandColorComponent } from './color.component';

export const colorRoutes: Routes = [
  {path: '', component: DesignLandColorComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(colorRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandColorRoutingModule {}
