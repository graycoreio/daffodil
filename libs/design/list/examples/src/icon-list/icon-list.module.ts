import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconListComponent } from './icon-list.component';

import { DaffListModule } from '@daffodil/design';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    IconListComponent
  ],
  imports: [
    CommonModule,
    
    DaffListModule,
    FontAwesomeModule
  ],
  exports: [
    IconListComponent
  ]
})
export class IconListModule { }