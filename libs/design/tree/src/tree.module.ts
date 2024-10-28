import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffTreeComponent } from './tree/tree.component';
import { DaffTreeItemDirective } from './tree-item/tree-item.directive';

/**
 * @deprecated in favor of {@link DAFF_TREE_COMPONENTS} Deprecated in version 0.78.0. Will be removed in version 0.81.0.
 */
@NgModule({
  imports: [
    CommonModule,
    DaffTreeComponent,
    DaffTreeItemDirective,
  ],
  exports: [
    DaffTreeComponent,
    DaffTreeItemDirective,
  ],
})
export class DaffTreeModule { }
