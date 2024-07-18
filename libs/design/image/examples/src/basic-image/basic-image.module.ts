import { NgModule } from '@angular/core';

import { DaffImageModule } from '@daffodil/design/image';

import { BasicImageComponent } from './basic-image.component';

@NgModule({
  declarations: [
    BasicImageComponent,
  ],
  exports: [
    BasicImageComponent,
  ],
  imports: [
    DaffImageModule,
  ],
})
export class BasicImageModule { }
