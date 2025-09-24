import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DaffioWhyPwaViewComponent } from './view/why-pwa-view.component';
import { DaffioWhyPwaRoutingModule } from './why-pwa-routing.module';
import { TemplateModule } from '../../core/template/template.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    TemplateModule,

    DaffioWhyPwaRoutingModule,
    DaffioWhyPwaViewComponent,
  ],
})
export class DaffioWhyPwaModule { }
