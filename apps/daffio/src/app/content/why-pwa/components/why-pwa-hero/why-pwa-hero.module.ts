import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffContainerModule,
  DaffHeroModule,
  DaffButtonModule,
} from '@daffodil/design';

import { DaffioWhyPwaHeroComponent } from './why-pwa-hero.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffContainerModule,
    DaffHeroModule,
    DaffButtonModule,
  ],
  exports: [
    DaffioWhyPwaHeroComponent,
  ],
  declarations: [
    DaffioWhyPwaHeroComponent,
  ],
})

export class DaffioWhyPwaHeroComponentModule {}
