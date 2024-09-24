import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
  DaffErrorMessageModule,
  DaffFormLabelModule,
} from '@daffodil/design';

import { DaffSelectOptionDirective } from './option/option.directive';
import { DaffSelectComponent } from './select/select.component';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    PortalModule,
    ReactiveFormsModule,

    DaffFormLabelModule,
    DaffErrorMessageModule,
    DaffSelectComponent,
    DaffSelectOptionDirective,
  ],
  exports: [
    DaffSelectComponent,
    DaffSelectOptionDirective,
    DaffFormLabelModule,
    DaffErrorMessageModule,
  ],
})

export class DaffSelectModule {}
