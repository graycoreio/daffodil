import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TemplateModule } from '../../core/template/template.module';

import { DaffioSupportComponent } from './component/support.component';
import { DaffioSupportRoutingModule } from './support-routing.module';

import { DaffHeroModule, DaffContainerModule, DaffButtonModule } from '@daffodil/design';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    
    TemplateModule,

    DaffioSupportRoutingModule,

    DaffHeroModule,
    DaffContainerModule,
    DaffButtonModule
  ],
  declarations: [
    DaffioSupportComponent
  ],
  exports: [
    DaffioSupportComponent
  ]
})
export class DaffioSupportModule { }
