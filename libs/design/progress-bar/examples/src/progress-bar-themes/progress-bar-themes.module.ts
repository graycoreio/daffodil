import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DaffProgressBarModule } from '@daffodil/design/progress-bar';

import { ProgressBarThemesComponent } from './progress-bar-themes.component';

@NgModule({
  declarations: [
    ProgressBarThemesComponent,
  ],
  exports: [
    ProgressBarThemesComponent,
  ],
  imports: [
    DaffProgressBarModule,
    ReactiveFormsModule,
  ],
})
export class ProgressBarThemesComponentModule { }
