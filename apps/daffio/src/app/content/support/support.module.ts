import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';
import { DaffHeroModule } from '@daffodil/design/hero';

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
