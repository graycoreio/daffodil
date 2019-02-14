import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIconComponent } from './loading-icon.component';

import { DaffLoadingIconModule } from '@daffodil/design';
import { DesignLandLoadingIconRoutingModule } from './loading-icon-routing.module';

@NgModule({
  declarations: [
    LoadingIconComponent,
  ],
  imports: [
    CommonModule,
    DaffLoadingIconModule,
    DesignLandLoadingIconRoutingModule
  ]
})
export class LoadingIconModule { }
