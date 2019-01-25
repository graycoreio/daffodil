import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffHeroComponent } from './hero/hero.component';
import { DaffHeroSubtitleDirective } from './hero-subtitle/hero-subtitle.directive';
import { DaffHeroTitleDirective } from './hero-title/hero-title.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffHeroComponent,
    DaffHeroTitleDirective,
    DaffHeroSubtitleDirective
  ],
  exports: [
    DaffHeroComponent,
    DaffHeroTitleDirective,
    DaffHeroSubtitleDirective
  ]
})
export class DaffHeroModule { }
