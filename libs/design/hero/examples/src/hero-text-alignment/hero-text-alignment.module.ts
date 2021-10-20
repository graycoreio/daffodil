import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffHeroModule,
  DaffContainerModule,
  DaffButtonModule,
} from '@daffodil/design';

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
