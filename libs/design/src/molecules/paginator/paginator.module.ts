import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffPaginatorComponent } from './paginator.component';
import { DaffButtonModule } from '../../atoms/button/public_api';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffButtonModule
  ],
  declarations: [
    DaffPaginatorComponent
  ],
  exports: [
    DaffPaginatorComponent
  ]
})
export class DaffPaginatorModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faChevronRight, faChevronLeft);
  } 
}
