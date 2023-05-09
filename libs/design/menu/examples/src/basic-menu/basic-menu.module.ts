import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffButtonModule,
  DaffMenuModule,
} from '@daffodil/design';

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
