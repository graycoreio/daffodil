import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffListModule } from '@daffodil/design/list';
import { DaffSidebarModule } from '@daffodil/design/sidebar';

import { DaffioMarketingSidebarContentComponent } from './marketing-sidebar-content/marketing-sidebar-content.component';
import { DaffioMarketingSidebarFooterComponent } from './marketing-sidebar-footer/marketing-sidebar-footer.component';
import { DaffioMarketingSidebarHeaderComponent } from './marketing-sidebar-header/marketing-sidebar-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    FontAwesomeModule,
    DaffListModule,
    DaffButtonModule,
    DaffSidebarModule,
  ],
  declarations: [
    DaffioMarketingSidebarHeaderComponent,
    DaffioMarketingSidebarContentComponent,
    DaffioMarketingSidebarFooterComponent,
  ],
  exports: [
    DaffioMarketingSidebarHeaderComponent,
    DaffioMarketingSidebarContentComponent,
    DaffioMarketingSidebarFooterComponent,
  ],
})
export class DaffioMarketingSidebarComponentModule { }
