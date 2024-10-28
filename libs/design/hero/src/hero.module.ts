import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffHeroComponent } from './hero/hero.component';
import { DaffHeroBodyDirective } from './hero-body/hero-body.directive';
import { DaffHeroIconDirective } from './hero-icon/hero-icon.directive';
import { DaffHeroSubtitleDirective } from './hero-subtitle/hero-subtitle.directive';
import { DaffHeroTaglineDirective } from './hero-tagline/hero-tagline.directive';
import { DaffHeroTitleDirective } from './hero-title/hero-title.directive';

/**
 * @deprecated in favor of {@link DAFF_HERO_COMPONENTS} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 * */
@NgModule({
  imports: [
    CommonModule,
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
