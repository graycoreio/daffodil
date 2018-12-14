import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffListSubheaderComponent } from './list-subheader/list-subheader.component';
import { DaffListComponent } from './list/list.component';
import { DaffListItemComponent } from './list-item/list-item.component';
import { DaffListItemIconComponent } from './list-item-icon/list-item-icon.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffListComponent,
    DaffListSubheaderComponent,
    DaffListItemComponent,
    DaffListItemIconComponent
  ],
  exports: [
    DaffListComponent,
    DaffListSubheaderComponent,
    DaffListItemComponent,
    DaffListItemIconComponent
  ]
})
export class DaffListModule { }