import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffButtonSetModule, DaffButtonModule } from '@daffodil/design';

import { DesignLandButtonRoutingModule } from './button-routing.module';

import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    DaffButtonSetModule,
    DaffButtonModule,
    DesignLandButtonRoutingModule
  ]
})
export class ButtonModule { }
