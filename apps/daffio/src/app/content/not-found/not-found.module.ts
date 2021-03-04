import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  DaffHeroModule,
  DaffContainerModule,
  DaffButtonModule,
} from '@daffodil/design';

import { TemplateModule } from '../../core/template/template.module';
import { DaffioNotFoundComponent } from './component/not-found.component';
import { DaffioNotFoundRoutingModule } from './not-found-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    TemplateModule,

    DaffioNotFoundRoutingModule,

    DaffHeroModule,
    DaffContainerModule,
    DaffButtonModule,
  ],
  declarations: [
    DaffioNotFoundComponent,
  ],
  exports: [
    DaffioNotFoundComponent,
  ],
})

export class DaffioNotFoundModule { }
