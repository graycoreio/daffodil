import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffHeroSubtitleDirective } from './hero-subtitle/hero-subtitle.directive';
import { DaffHeroTitleDirective } from './hero-title/hero-title.directive';
import { DaffHeroComponent } from './hero/hero.component';
import { DaffHeroTaglineDirective } from './hero-tagline/hero-tagline.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffHeroComponent,
    DaffHeroTitleDirective,
    DaffHeroSubtitleDirective,
    DaffHeroTaglineDirective
  ],
  exports: [
    DaffHeroComponent,
    DaffHeroTitleDirective,
    DaffHeroSubtitleDirective,
    DaffHeroTaglineDirective,
  ],
})
export class DaffHeroModule { }
