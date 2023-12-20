import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffListComponent } from './list/list.component';
import { DaffListItemComponent } from './list-item/list-item.component';
import { DaffListSubheaderDirective } from './list-subheader/list-subheader.directive';

@NgModule({
  imports: [
    CommonModule,
    DaffPrefixSuffixModule,
  ],
  declarations: [
    DaffListComponent,
    DaffListSubheaderDirective,
    DaffListItemComponent,
  ],
  exports: [
    DaffListComponent,
    DaffListSubheaderDirective,
    DaffListItemComponent,
    DaffPrefixSuffixModule,
  ],
})
export class DaffListModule { }
