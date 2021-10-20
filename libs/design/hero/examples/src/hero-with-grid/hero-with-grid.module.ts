import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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

    FontAwesomeModule,
  ],
})
export class HeroWithGridModule { }
