import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffHeroSubtitleDirective } from './hero-subtitle/hero-subtitle.directive';
import { DaffHeroTaglineDirective } from './hero-tagline/hero-tagline.directive';
import { DaffHeroTitleDirective } from './hero-title/hero-title.directive';
import { DaffHeroComponent } from './hero/hero.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffHeroComponent,
    DaffHeroTaglineDirective,
    DaffHeroTitleDirective,
    DaffHeroSubtitleDirective,
  ],
  exports: [
    DaffHeroComponent,
    DaffHeroTaglineDirective,
    DaffHeroTitleDirective,
    DaffHeroSubtitleDirective,
  ],
})
export class DaffHeroModule { }
