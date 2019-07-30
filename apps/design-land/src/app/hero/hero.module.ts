import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero.component';
import { DesignLandHeroRoutingModule } from './hero-routing.module';

import { DaffHeroModule } from '@daffodil/design';


@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    CommonModule,
    DesignLandHeroRoutingModule,

    DaffHeroModule
  ]
})
export class HeroModule { }
