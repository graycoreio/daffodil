import { NgModule } from '@angular/core';

import { TemplateComponent } from './template/template.component';
import { HeaderModule } from '../header/header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    HeaderModule
  ],
  declarations: [
    TemplateComponent
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
