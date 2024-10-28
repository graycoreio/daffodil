import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffPrefixSuffixModule } from '@daffodil/design';

import { DaffListComponent } from './list/list.component';
import { DaffListItemComponent } from './list-item/list-item.component';

/**
 * @deprecated in favor of {@link DAFF_LIST_COMPONENTS} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 */
@NgModule({
  imports: [
    CommonModule,
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
