import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffListComponent } from './list/list.component';
import { DaffListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule,
    DaffPrefixSuffixModule,
  ],
  declarations: [
    DaffListComponent,
    DaffListItemComponent,
  ],
  exports: [
    DaffListComponent,
    DaffListItemComponent,
    DaffPrefixSuffixModule,
  ],
})
export class DaffListModule { }
