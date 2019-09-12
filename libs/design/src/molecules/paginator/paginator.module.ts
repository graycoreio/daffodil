import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
export class DaffPaginatorModule {}
