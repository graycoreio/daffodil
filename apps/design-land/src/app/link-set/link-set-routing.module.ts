import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LinkSetComponent } from './link-set.component';

export const linkSetRoutes: Routes = [
  {path: '', component: LinkSetComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(linkSetRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandLinkSetRoutingModule {}
