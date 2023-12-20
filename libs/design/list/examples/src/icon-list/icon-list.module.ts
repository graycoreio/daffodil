import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffListModule } from '@daffodil/design/list';

import { IconListComponent } from './icon-list.component';

@NgModule({
  declarations: [
    IconListComponent,
  ],
  imports: [
    CommonModule,

    DaffListModule,
    FontAwesomeModule,
  ],
  exports: [
    IconListComponent,
  ],
})
export class IconListModule { }
