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
    'button[daff-underline-button]' + ',' +
    'a[daff-underline-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './underline.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    DaffPrefixSuffixModule,
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class DaffUnderlineButtonComponent
  extends DaffButtonBaseDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-underline-button') class = true;
}
