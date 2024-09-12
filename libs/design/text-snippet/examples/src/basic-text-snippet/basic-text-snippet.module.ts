import { NgModule } from '@angular/core';

import { DaffTextSnippetComponent } from '@daffodil/design/text-snippet';

import { BasicTextSnippetComponent } from './basic-text-snippet.component';

@NgModule({
  declarations: [
    BasicTextSnippetComponent,
  ],
  exports: [
    BasicTextSnippetComponent,
  ],
  imports: [
    DaffTextSnippetComponent,
  ],
})
export class BasicTextSnippetComponentModule { }
