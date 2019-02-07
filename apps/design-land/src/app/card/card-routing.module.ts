import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';

export const cardRoutes: Routes = [
  {path: '', component: CardComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(cardRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandCardRoutingModule {}
