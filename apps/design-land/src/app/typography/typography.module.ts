import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffArticleModule } from '@daffodil/design';

import { DesignLandTypographyRoutingModule } from './typography-routing.module';
import { DesignLandTypographyComponent } from './typography.component';


@NgModule({
  declarations: [
    DesignLandTypographyComponent,
  ],
  imports: [
    CommonModule,
    DesignLandTypographyRoutingModule,
    DaffArticleModule,
  ],
})
export class DesignLandTypographyModule {}
