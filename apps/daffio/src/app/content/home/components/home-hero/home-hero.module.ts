import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffContainerModule,
  DaffHeroModule,
  DaffButtonModule,
  DaffImageModule,
} from '@daffodil/design';

import { DaffioHomeHeroComponent } from './home-hero.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffContainerModule,
    DaffHeroModule,
    DaffButtonModule,
    DaffImageModule,
  ],
  exports: [
    DaffioHomeHeroComponent,
  ],
  declarations: [
    DaffioHomeHeroComponent,
  ],
})

export class DaffioHomeHeroComponentModule {}
