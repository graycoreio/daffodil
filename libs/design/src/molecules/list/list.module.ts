import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DaffListComponent } from './list/list.component';
import { DaffListSubheaderDirective } from './list-subheader/list-subheader.directive';
import { DaffListItemComponent } from './list-item/list-item.component';
import { DaffPrefixSuffixModule } from '../../core/prefix-suffix/prefix-suffix.module';

@NgModule({
  imports: [
    CommonModule,
    DaffPrefixSuffixModule
  ],
  declarations: [
    DaffListComponent,
    DaffListSubheaderDirective,
    DaffListItemComponent
  ],
  exports: [
    DaffListComponent,
    DaffListSubheaderDirective,
    DaffListItemComponent,
    DaffPrefixSuffixModule
  ]
})
export class DaffListModule { }