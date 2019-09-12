import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffPaginatorModule } from '@daffodil/design';

import { PaginatorComponent } from './paginator.component';
import { DesignLandPaginatorRoutingModule } from './paginator-routing.module';

@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    DaffPaginatorModule,
    DesignLandPaginatorRoutingModule
  ]
})
export class PaginatorModule { }
