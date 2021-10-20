import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffHeroBodyDirective } from './hero-body/hero-body.directive';
import { DaffHeroIconDirective } from './hero-icon/hero-icon.directive';
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
    DaffHeroIconDirective,
    DaffHeroTaglineDirective,
    DaffHeroTitleDirective,
    DaffHeroSubtitleDirective,
    DaffHeroBodyDirective,
  ],
  exports: [
    DaffHeroComponent,
    DaffHeroIconDirective,
    DaffHeroTaglineDirective,
    DaffHeroTitleDirective,
    DaffHeroSubtitleDirective,
    DaffHeroBodyDirective,
  ],
})
export class DaffHeroModule { }
