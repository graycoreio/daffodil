import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '../../atoms/button/public_api';
import { DaffPaginatorComponent } from './paginator.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    DaffButtonModule,
  ],
  declarations: [
    DaffPaginatorComponent,
  ],
  exports: [
    DaffPaginatorComponent,
  ],
})
export class DaffPaginatorModule {}
