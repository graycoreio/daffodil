import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandCardComponent } from './card.component';

export const cardRoutes: Routes = [
  { path: '', component: DesignLandCardComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(cardRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandCardRoutingModule {}
