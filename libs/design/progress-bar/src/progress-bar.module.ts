import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DaffProgressBarLabelDirective } from './progress-bar-label/progress-bar-label.directive';
import { DaffProgressBarComponent } from './progress-bar.component';

/**
 * @deprecated in favor of {@link DAFF_PROGRESS_BAR_COMPONENTS}
 */
@NgModule({
  imports: [
    CommonModule,
    DaffProgressBarComponent,
    DaffProgressBarLabelDirective,
  ],
  exports: [
    DaffProgressBarComponent,
    DaffProgressBarLabelDirective,
  ],
})
export class DaffProgressBarModule { }
