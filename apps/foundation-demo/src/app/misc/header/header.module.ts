import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffHeaderModule } from '../../design/molecules/daff-header/daff-header.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    DaffHeaderModule,
    SidebarModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
