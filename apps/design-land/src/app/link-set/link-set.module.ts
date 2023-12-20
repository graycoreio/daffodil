import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffLinkSetModule } from '@daffodil/design/link-set';

import { DesignLandLinkSetRoutingModule } from './link-set-routing.module';
import { DesignLandLinkSetComponent } from './link-set.component';


@NgModule({
  declarations: [
    DesignLandLinkSetComponent,
  ],
  imports: [
    CommonModule,
    DesignLandLinkSetRoutingModule,

    DaffLinkSetModule,
  ],
})
export class DesignLandLinkSetModule { }
