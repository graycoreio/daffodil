import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalloutComponent } from './callout.component';
import { DesignLandCalloutRoutingModule } from './callout-routing.module';

import { DaffCalloutModule } from '@daffodil/design';


@NgModule({
  declarations: [
    CalloutComponent
  ],
  imports: [
    CommonModule,
    DesignLandCalloutRoutingModule,

    DaffCalloutModule
  ]
})
export class CalloutModule { }
