import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkComponent } from './link.component';
import { DesignLandLinkRoutingModule } from './link-routing.module';

import { DaffLinkModule } from '@daffodil/design';


@NgModule({
  declarations: [
    LinkComponent
  ],
  imports: [
    CommonModule,
    DesignLandLinkRoutingModule,

    DaffLinkModule
  ]
})
export class LinkModule { }
