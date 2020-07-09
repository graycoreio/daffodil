import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaffListModule } from '@daffodil/design';

import { DesignLandListRoutingModule } from './list-routing.module';

import { DesignLandListComponent } from './list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    DesignLandListComponent
  ],
  imports: [
    CommonModule,
    DaffListModule,
    DesignLandListRoutingModule,
    FontAwesomeModule
  ]
})
export class DesignLandListModule {}
