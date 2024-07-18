import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffHeroModule } from '@daffodil/design/hero';

import { HeroThemingComponent } from './hero-theming.component';

@NgModule({
  declarations: [
    HeroThemingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffHeroModule,
    DaffButtonModule,

    FontAwesomeModule,
  ],
  exports: [
    HeroThemingComponent,
  ],
})
export class HeroThemingModule { }
