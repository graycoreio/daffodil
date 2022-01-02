import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DesignLandExampleViewerModule } from '../core/code-preview/container/example-viewer.module';
import { DesignLandInputRoutingModule } from './input-routing.module';
import { DesignLandInputComponent } from './input.component';


@NgModule({
  declarations: [
    DesignLandInputComponent,
  ],
  imports: [
    CommonModule,
    DesignLandInputRoutingModule,
    DesignLandExampleViewerModule,
  ],
})
export class DesignLandInputModule { }
