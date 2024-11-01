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
    'button[daff-icon-button]' + ',' +
    'a[daff-icon-button]',
  templateUrl: '../button-base.component.html',
  styleUrl: './icon.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    DaffPrefixSuffixModule,
    DAFF_LOADING_ICON_COMPONENTS,
  ],
})
export class DaffIconButtonComponent
  extends DaffButtonBaseDirective {

  /**
   * @docs-private
   */
  @HostBinding('class.daff-icon-button') class = true;
}
