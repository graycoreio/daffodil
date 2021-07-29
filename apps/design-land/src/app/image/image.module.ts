import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffImageModule } from '@daffodil/design';

import { DesignLandImageRoutingModule } from './image-routing-module';
import { DesignLandImageComponent } from './image.component';

@NgModule({
  declarations: [
    DesignLandImageComponent,
  ],
  imports: [
    CommonModule,

    DaffImageModule,
    DesignLandImageRoutingModule,
  ],
})
export class DesignLandImageModule { }
