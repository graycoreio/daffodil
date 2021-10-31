import { NgModule } from '@angular/core';

import { BasicImageComponent } from './basic-image.component';

import { DaffImageModule } from '@daffodil/design';

@NgModule({
  declarations: [
    BasicImageComponent
  ],
  exports: [
    BasicImageComponent
  ],
  imports: [
    DaffImageModule
  ]
})
export class BasicImageModule { }