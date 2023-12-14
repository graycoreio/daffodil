import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DesignLandTemplateComponent } from './template.component';
import { DesignLandSidebarViewportModule } from '../sidebar-viewport/sidebar-viewport.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    DesignLandSidebarViewportModule,
  ],
  declarations: [
    DesignLandTemplateComponent,
  ],
  exports: [
    DesignLandTemplateComponent,
  ],
})
export class DesignLandTemplateModule { }
