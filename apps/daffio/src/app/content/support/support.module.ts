import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  DaffHeroModule,
  DaffContainerModule,
} from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';

import { DaffioSupportComponent } from './component/support.component';
import { DaffioSupportRoutingModule } from './support-routing.module';
import { TemplateModule } from '../../core/template/template.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    TemplateModule,

    DaffioSupportRoutingModule,

    DaffHeroModule,
    DaffContainerModule,
    DaffButtonModule,
  ],
  declarations: [
    DaffioSupportComponent,
  ],
  exports: [
    DaffioSupportComponent,
  ],
})
export class DaffioSupportModule { }
