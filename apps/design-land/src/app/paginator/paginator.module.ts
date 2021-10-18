import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPaginatorModule } from '@daffodil/design';
import { DaffArticleModule } from '@daffodil/design';
import { DesignLandPaginatorRoutingModule } from './paginator-routing.module';
import { DesignLandPaginatorComponent } from './paginator.component';

@NgModule({
  declarations: [
    DesignLandPaginatorComponent,
  ],
  imports: [
    CommonModule,
    DaffPaginatorModule,
    DesignLandPaginatorRoutingModule,
    DaffArticleModule
  ],
})
export class DesignLandPaginatorModule { }
