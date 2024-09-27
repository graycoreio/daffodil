import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffTreeComponent } from './tree/tree.component';
import { DaffTreeItemDirective } from './tree-item/tree-item.directive';

/**
 * @deprecated in favor of {@link DAFF_TREE_COMPONENTS}
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
