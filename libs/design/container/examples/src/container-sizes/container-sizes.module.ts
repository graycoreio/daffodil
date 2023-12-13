import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffContainerModule } from '@daffodil/design/container';

import { ContainerSizesComponent } from './container-sizes.component';

@NgModule({
  declarations: [
    ContainerSizesComponent,
  ],
  exports: [
    ContainerSizesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    DaffContainerModule,
  ],
})
export class ContainerSizesModule { }
