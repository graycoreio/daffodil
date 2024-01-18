import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DaffButtonModule } from '@daffodil/design/button';
import { DaffCalloutModule } from '@daffodil/design/callout';
import { DaffContainerModule } from '@daffodil/design/container';

import { DaffioSubFooterComponent } from './sub-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,

    DaffCalloutModule,
    DaffContainerModule,
    DaffButtonModule,
  ],
  declarations: [
    DaffioSubFooterComponent,
  ],
  exports: [
    DaffioSubFooterComponent,
  ],
})
export class DaffioSubFooterComponentModule {}
