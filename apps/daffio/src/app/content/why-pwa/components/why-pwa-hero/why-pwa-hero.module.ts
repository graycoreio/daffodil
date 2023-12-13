import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  DaffContainerModule,
  DaffHeroModule,
} from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

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
