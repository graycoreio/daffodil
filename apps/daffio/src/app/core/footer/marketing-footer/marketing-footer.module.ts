import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffioMarketingFooterComponent } from './marketing-footer.component';
import { DaffioFooterComponentModule } from '../footer/footer.module';
import { DaffioSubFooterComponentModule } from '../sub-footer/sub-footer.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioSubFooterComponentModule,
    DaffioFooterComponentModule,
  ],
  declarations: [
    DaffioMarketingFooterComponent,
  ],
  exports: [
    DaffioMarketingFooterComponent,
  ],
})
export class DaffioMarketingFooterComponentModule {}
