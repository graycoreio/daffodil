import { NgIf } from '@angular/common';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import { DaffPrefixSuffixModule } from '@daffodil/design';
import { DAFF_LOADING_ICON_COMPONENTS } from '@daffodil/design/loading-icon';

import { DaffButtonBaseDirective } from '../button-base.directive';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '' +
    'button[daff-raised-button]' + ',' +
    'a[daff-raised-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './raised.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    DaffPrefixSuffixModule,
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class DaffRaisedButtonComponent
  extends DaffButtonBaseDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-raised-button') class = true;
}
