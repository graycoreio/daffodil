import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';

export const loadingRoutes: Routes = [
  {path: '', component: NavbarComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(loadingRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandNavbarRoutingModule {}
