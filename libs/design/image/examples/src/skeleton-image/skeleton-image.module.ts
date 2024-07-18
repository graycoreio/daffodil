import { NgModule } from '@angular/core';

import { DaffImageModule } from '@daffodil/design/image';

import { SkeletonImageComponent } from './skeleton-image.component';

@NgModule({
  declarations: [
    SkeletonImageComponent,
  ],
  exports: [
    SkeletonImageComponent,
  ],
  imports: [
    DaffImageModule,
  ],
})
export class SkeletonImageModule { }
