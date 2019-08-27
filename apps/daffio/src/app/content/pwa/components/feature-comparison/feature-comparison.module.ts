import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffioFeatureComparisonComponent } from './feature-comparison.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    DaffioFeatureComparisonComponent
  ],
  exports: [
    DaffioFeatureComparisonComponent
  ]
})
export class DaffioFeatureComparisonModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faCheck, faTimes);
  }
}
