import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffHeroModule } from '@daffodil/design/hero';
import { DaffImageModule } from '@daffodil/design/image';

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
