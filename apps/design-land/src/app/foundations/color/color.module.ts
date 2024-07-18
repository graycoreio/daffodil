import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design/article';
import { DaffDocsColorPalettesComponent } from '@daffodil/docs-components';

import { DesignLandColorRoutingModule } from './color-routing.module';
import { DesignLandColorComponent } from './color.component';


@NgModule({
  declarations: [
    DesignLandColorComponent,
  ],
  imports: [
    CommonModule,
    DesignLandColorRoutingModule,
    DaffDocsColorPalettesComponent,

    DaffArticleModule,
  ],
})
export class DesignLandColorModule { }
