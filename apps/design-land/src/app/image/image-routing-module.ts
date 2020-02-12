import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DesignLandImageComponent } from './image.component';

export const imageRoutes: Routes = [
  {path: '', component: DesignLandImageComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(imageRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandImageRoutingModule {}
