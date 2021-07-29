import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffContainerModule } from '@daffodil/design';

import { DesignLandContainerRoutingModule } from './container-routing.module';
import { DesignLandContainerComponent } from './container.component';



@NgModule({
  declarations: [
    DesignLandContainerComponent,
  ],
  imports: [
    CommonModule,
    DesignLandContainerRoutingModule,

    DaffContainerModule,
  ],
})
export class DesignLandContainerModule { }
