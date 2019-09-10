import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LinkComponent } from './link.component';

export const linkRoutes: Routes = [
  {path: '', component: LinkComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(linkRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandLinkRoutingModule {}
