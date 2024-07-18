import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffMenuModule } from '@daffodil/design/menu';

import { BasicMenuComponent } from './basic-menu.component';
import { MenuContentComponent } from './menu-content/menu-content.component';

@NgModule({
  declarations: [
    BasicMenuComponent,
    MenuContentComponent,
  ],
  exports: [
    BasicMenuComponent,
  ],
  imports: [
    DaffButtonModule,
    DaffMenuModule,
    FontAwesomeModule,
  ],
})
export class BasicMenuComponentModule { }
