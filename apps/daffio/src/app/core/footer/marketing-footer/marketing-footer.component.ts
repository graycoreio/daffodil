import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

import { DaffioFooterComponent } from '../footer/footer.component';
import { DaffioSubFooterComponent } from '../sub-footer/sub-footer.component';

@Component({
  selector: 'daffio-marketing-footer',
  templateUrl: './marketing-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DaffioSubFooterComponent,
    DaffioFooterComponent,
  ],
})
export class DaffioMarketingFooterComponent {}
