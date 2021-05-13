import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffHeroModule,
  DaffContainerModule,
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
  ],
})
export class HeroTextAlignmentModule { }
