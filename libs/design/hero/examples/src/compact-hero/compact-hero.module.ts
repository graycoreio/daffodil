import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffHeroModule } from '@daffodil/design/hero';

import { CompactHeroComponent } from './compact-hero.component';

@NgModule({
  declarations: [
    CompactHeroComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DaffHeroModule,
    DaffButtonModule,

    FontAwesomeModule,
  ],
  exports: [
    CompactHeroComponent,
  ],
})
export class CompactHeroModule { }
