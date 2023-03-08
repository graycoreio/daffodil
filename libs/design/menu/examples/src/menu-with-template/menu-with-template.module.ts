import { NgModule } from '@angular/core';

import {
  DaffButtonModule,
  DaffListModule,
  DaffMenuModule,
} from '@daffodil/design';

import { MenuWithTemplateComponent } from './menu-with-template.component';

@NgModule({
  declarations: [
    MenuWithTemplateComponent,
  ],
  exports: [
    MenuWithTemplateComponent,
  ],
  imports: [
    DaffMenuModule,
    DaffButtonModule,
    DaffListModule,
  ],
})
export class MenuWithTemplateModule { }
