import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DesignLandMessageBarComponent } from './message-bar.component';

export const messageBarRoutes: Routes = [
  {path: '', component: DesignLandMessageBarComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(messageBarRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandMessageBarRoutingModule {}
