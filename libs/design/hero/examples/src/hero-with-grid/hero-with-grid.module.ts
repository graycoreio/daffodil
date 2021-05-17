import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffHeroModule,
  DaffContainerModule,
  DaffButtonModule,
} from '@daffodil/design';

import { HeroWithGridComponent } from './hero-with-grid.component';

@NgModule({
  declarations: [
    HeroWithGridComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffHeroModule,
    DaffContainerModule,
    DaffButtonModule,
  ],
})
export class HeroWithGridModule { }
