import { NgModule } from '@angular/core';

import {
  DaffButtonModule,
  DaffMenuModule,
  DaffListModule,
} from '@daffodil/design';

import { MenuContentComponent } from './menu-content/menu-content.component';
import { MenuWithComponentComponent } from './menu-with-component.component';

@NgModule({
  declarations: [
    MenuWithComponentComponent,
    MenuContentComponent,
  ],
  exports: [
    MenuWithComponentComponent,
  ],
  imports: [
    DaffButtonModule,
    DaffMenuModule,
    DaffListModule,
  ],
})
export class MenuWithComponentModule { }
