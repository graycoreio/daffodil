import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
} from '@angular/router';

import { DesignLandHeroComponent } from './hero.component';

export const heroRoutes: Routes = [
  { path: '', component: DesignLandHeroComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(heroRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DesignLandHeroRoutingModule {}
