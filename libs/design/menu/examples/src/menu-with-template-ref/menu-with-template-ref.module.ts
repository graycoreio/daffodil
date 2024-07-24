import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffMenuModule } from '@daffodil/design/menu';

import { MenuWithTemplateRefComponent } from './menu-with-template-ref.component';

@NgModule({
  declarations: [
    MenuWithTemplateRefComponent,
  ],
  exports: [
    MenuWithTemplateRefComponent,
  ],
  imports: [
    DaffButtonModule,
    DaffMenuModule,
    FontAwesomeModule,
  ],
})
export class MenuWithTemplateRefComponentModule { }
