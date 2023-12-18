import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  DaffNavbarModule,
  DaffLinkSetModule,
} from '@daffodil/design';
import { DaffButtonModule } from '@daffodil/design/button';
import { DaffSidebarModule } from '@daffodil/design/sidebar';

import { OverandUnderSidebarsComponent } from './over-and-under-sidebars.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FontAwesomeModule,

    DaffSidebarModule,
    DaffNavbarModule,
    DaffButtonModule,
    DaffLinkSetModule,
  ],
  declarations: [
    OverandUnderSidebarsComponent,
  ],
  exports: [
    OverandUnderSidebarsComponent,
  ],
})
export class OverandUnderSidebarsModule { }
