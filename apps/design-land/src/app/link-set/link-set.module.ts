import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkSetComponent } from './link-set.component';
import { DesignLandLinkSetRoutingModule } from './link-set-routing.module';

import { DaffLinkSetModule } from '@daffodil/design';

@NgModule({
  declarations: [
    LinkSetComponent
  ],
  imports: [
    CommonModule,
    DesignLandLinkSetRoutingModule,

    DaffLinkSetModule
  ]
})
export class LinkSetModule { }
