import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffTreeComponent } from './tree/tree.component';
import { DaffTreeItemDirective } from './tree-item/tree-item.directive';

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
