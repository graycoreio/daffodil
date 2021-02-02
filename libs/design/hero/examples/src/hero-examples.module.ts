import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroThemingModule } from './hero-theming/hero-theming.module';

import { HERO_EXAMPLES } from './examples';

@NgModule({
  imports: [
    CommonModule,
    HeroThemingModule
  ],
  entryComponents: [
    ...HERO_EXAMPLES
  ]
})
export class HeroExamplesModule { }