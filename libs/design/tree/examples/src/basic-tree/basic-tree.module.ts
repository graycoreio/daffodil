import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffTreeModule } from '@daffodil/design/tree';

import { BasicTreeComponent } from './basic-tree.component';

@NgModule({
  declarations: [
    BasicTreeComponent,
  ],
  exports: [
    BasicTreeComponent,
  ],
  imports: [
    RouterModule,
    DaffTreeModule,
    FontAwesomeModule,
  ],
})
export class BasicTreeModule { }
