import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignLandImageComponent } from './image.component';
import { DaffImageModule } from '@daffodil/design';
import { DesignLandImageRoutingModule } from './image-routing-module';

@NgModule({
  declarations: [
    DesignLandImageComponent
  ],
  imports: [
    CommonModule,

    DaffImageModule,
    DesignLandImageRoutingModule
  ]
})
export class DesignLandImageModule { }
