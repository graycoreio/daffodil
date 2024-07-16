import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsPaletteShadeSortPipe } from '@daffodil/docs-components';

import { DesignLandColorRoutingModule } from './color-routing.module';
import { DesignLandColorComponent } from './color.component';


@NgModule({
  declarations: [
    DesignLandColorComponent,
  ],
  imports: [
    CommonModule,
    DesignLandColorRoutingModule,
    DaffDocsPaletteShadeSortPipe,

    DaffArticleModule,
  ],
})
export class DesignLandColorModule { }
