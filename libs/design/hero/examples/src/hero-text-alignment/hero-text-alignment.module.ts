import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffHeroModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';

import { HeroTextAlignmentComponent } from './hero-text-alignment.component';

@NgModule({
  declarations: [
    HeroTextAlignmentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffHeroModule,
    DaffContainerModule,
    DaffButtonModule,

    FontAwesomeModule,
  ],
})
export class HeroTextAlignmentModule { }
