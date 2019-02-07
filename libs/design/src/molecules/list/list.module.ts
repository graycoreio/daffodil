import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffListSubheaderDirective } from './list-subheader/list-subheader.directive';
import { DaffListComponent } from './list/list.component';
import { DaffListItemComponent } from './list-item/list-item.component';
import { DaffListItemIconDirective } from './list-item-icon/list-item-icon.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DaffListComponent,
    DaffListSubheaderDirective,
    DaffListItemComponent,
    DaffListItemIconDirective
  ],
  exports: [
    DaffListComponent,
    DaffListSubheaderDirective,
    DaffListItemComponent,
    DaffListItemIconDirective
  ]
})
export class DaffListModule { }