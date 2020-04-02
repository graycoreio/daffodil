import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignLandContainerComponent } from './container.component';
import { DesignLandContainerRoutingModule } from './container-routing.module';

import { DaffContainerModule } from '@daffodil/design';


@NgModule({
  declarations: [
    DesignLandContainerComponent
  ],
  imports: [
    CommonModule,
    DesignLandContainerRoutingModule,

    DaffContainerModule
  ]
})
export class DesignLandContainerModule { }
