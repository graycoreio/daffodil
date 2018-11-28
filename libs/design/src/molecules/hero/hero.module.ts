import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffHeroComponent } from './hero.component';
import { DaffHeroSubtitleComponent } from './hero-subtitle.component';
import { DaffHeroTitleComponent } from './hero-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffHeroComponent,
    DaffHeroTitleComponent,
    DaffHeroSubtitleComponent
  ],
  exports: [
    DaffHeroComponent,
    DaffHeroTitleComponent,
    DaffHeroSubtitleComponent
  ]
})
export class DaffHeroModule { }
