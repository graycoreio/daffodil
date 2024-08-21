import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffioApiListComponent } from './api-list.component';
import { DaffioApiListSectionComponent } from '../api-list-section/api-list-section.component';

@NgModule({
  imports: [
    CommonModule,
    DaffioApiListSectionComponent,
    RouterModule,
  ],
  declarations: [
    DaffioApiListComponent,
  ],
  exports: [
    DaffioApiListComponent,
  ],
})
export class DaffioApiListModule {}
