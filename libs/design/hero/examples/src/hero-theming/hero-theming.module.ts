import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffHeroModule } from '@daffodil/design';

import { HeroThemingComponent } from './hero-theming.component';


@NgModule({
  declarations: [
    HeroThemingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffHeroModule,
  ],
  exports: [
    HeroThemingComponent,
  ],
})
export class HeroThemingModule { }
