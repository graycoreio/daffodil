import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffHeroModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';

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
