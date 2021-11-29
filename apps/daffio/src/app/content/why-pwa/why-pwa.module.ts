import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TemplateModule } from '../../core/template/template.module';
import { DaffioWhyPwaViewModule } from './view/why-pwa-view.modules';
import { DaffioWhyPwaRoutingModule } from './why-pwa-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    TemplateModule,

    DaffioWhyPwaRoutingModule,
    DaffioWhyPwaViewModule,
  ],
})
export class DaffioWhyPwaModule { }
