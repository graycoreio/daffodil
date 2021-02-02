import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroThemingComponent } from './hero-theming.component';

import { DaffHeroModule } from '@daffodil/design';

@NgModule({
  declarations: [
    HeroThemingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffHeroModule
  ],
  exports: [
    HeroThemingComponent
  ]
})
export class HeroThemingModule { }