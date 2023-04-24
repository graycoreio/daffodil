import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffTreeItemDirective } from './tree-item/tree-item.directive';
import { DaffTreeComponent } from './tree/tree.component';

@NgModule({
  declarations: [
    DaffTreeComponent,
    DaffTreeItemDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DaffTreeComponent,
    DaffTreeItemDirective,
  ],
})
export class DaffTreeModule { }
