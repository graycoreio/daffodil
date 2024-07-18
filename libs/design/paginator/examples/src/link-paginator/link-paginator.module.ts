import { NgModule } from '@angular/core';

import { DaffPaginatorModule } from '@daffodil/design/paginator';

import { LinkPaginatorComponent } from './link-paginator.component';

@NgModule({
  declarations: [
    LinkPaginatorComponent,
  ],
  exports: [
    LinkPaginatorComponent,
  ],
  imports: [
    DaffPaginatorModule,
  ],
  providers: [],
})
export class LinkPaginatorModule { }
