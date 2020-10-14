import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignLandColorComponent } from './color.component';
import { DesignLandColorRoutingModule } from './color-routing.module';

import { DaffArticleModule } from '@daffodil/design';

@NgModule({
  declarations: [
    DesignLandColorComponent
  ],
  imports: [
    CommonModule,
    DesignLandColorRoutingModule,

    DaffArticleModule
  ]
})
export class DesignLandColorModule { }
