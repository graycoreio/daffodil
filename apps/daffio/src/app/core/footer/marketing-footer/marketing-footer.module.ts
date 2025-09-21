import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DaffioMarketingFooterComponent } from './marketing-footer.component';
import { DaffioFooterComponent } from '../footer/footer.component';
import { DaffioSubFooterComponentModule } from '../sub-footer/sub-footer.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    DaffioSubFooterComponentModule,
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
