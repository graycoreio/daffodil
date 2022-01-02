import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesignLandInputRoutingModule } from './input-routing.module';
import { DesignLandInputComponent } from './input.component';


@NgModule({
  declarations: [
    DesignLandInputComponent,
  ],
  imports: [
    CommonModule,
    DesignLandInputRoutingModule,
  ],
})
export class DesignLandInputModule { }
