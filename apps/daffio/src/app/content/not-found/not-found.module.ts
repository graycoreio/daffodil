import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DaffHeroModule } from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioNotFoundComponent } from './component/not-found.component';
import { DaffioNotFoundRoutingModule } from './not-found-routing.module';
import { TemplateModule } from '../../core/template/template.module';

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
