import { NgModule } from '@angular/core';

import { DaffPaginatorModule } from '@daffodil/design';

import { BasicPaginatorComponent } from './basic-paginator.component';

@NgModule({
  declarations: [
    BasicPaginatorComponent,
  ],
  exports: [
    BasicPaginatorComponent,
  ],
  imports: [
    DaffPaginatorModule,
  ],
  providers: [],
})
export class BasicPaginatorModule { }
