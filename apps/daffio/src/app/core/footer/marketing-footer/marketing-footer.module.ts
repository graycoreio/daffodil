import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffioMarketingFooterComponent } from './marketing-footer.component';
import { DaffioFooterComponent } from '../footer/footer.component';
import { DaffioSubFooterComponent } from '../sub-footer/sub-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioSubFooterComponent,
    DaffioFooterComponent,
  ],
  declarations: [
    DaffioMarketingFooterComponent,
  ],
  exports: [
    DaffioMarketingFooterComponent,
  ],
})
export class DaffioMarketingFooterComponentModule {}
