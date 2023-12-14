import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffHeroModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';
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
