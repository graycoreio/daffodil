import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffHeaderModule } from '../../design/molecules/daff-header/daff-header.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    DaffHeaderModule,
    SidebarModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
