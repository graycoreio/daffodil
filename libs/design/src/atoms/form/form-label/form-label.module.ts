import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffFormLabelDirective } from '../form-label/form-label.directive';

@NgModule({
  exports: [
    DaffFormLabelDirective,
  ],
  declarations: [
    DaffFormLabelDirective,
  ],
})

export class DaffFormLabelModule {}
