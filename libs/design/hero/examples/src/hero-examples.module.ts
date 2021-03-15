import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HERO_EXAMPLES } from './examples';
import { HeroThemingModule } from './hero-theming/hero-theming.module';


@NgModule({
  imports: [
    CommonModule,
    HeroThemingModule,
  ],
  entryComponents: [
    ...HERO_EXAMPLES,
  ],
})
export class HeroExamplesModule { }
