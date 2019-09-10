import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero.component';

export const heroRoutes: Routes = [
  {path: '', component: HeroComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(heroRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class DesignLandHeroRoutingModule {}
