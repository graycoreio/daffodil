import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DaffSidebarModule } from '@daffodil/design';

import { DemoSidebarStateModule } from './sidebar.state.module';
import { SidebarViewportContainer } from './containers/sidebar-viewport/sidebar-viewport.component';
import { SidebarContainer } from './containers/sidebar/sidebar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DemoSidebarStateModule,
    DaffSidebarModule,
    FontAwesomeModule
  ],
  declarations: [
    SidebarViewportContainer,
    SidebarContainer
  ],
  exports: [
    SidebarViewportContainer,
    SidebarContainer
  ]
})

export class SidebarModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faTimes);
  }
}
