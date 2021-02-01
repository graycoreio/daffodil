import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffHeroSubtitleDirective } from './hero-subtitle/hero-subtitle.directive';
import { DaffHeroTitleDirective } from './hero-title/hero-title.directive';
import { DaffHeroComponent } from './hero/hero.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DaffHeroComponent,
    DaffHeroTitleDirective,
    DaffHeroSubtitleDirective,
  ],
  exports: [
    DaffHeroComponent,
    DaffHeroTitleDirective,
    DaffHeroSubtitleDirective,
  ],
})
export class DaffHeroModule { }
