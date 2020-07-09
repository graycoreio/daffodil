import { Component, ChangeDetectionStrategy, HostBinding, ContentChild } from '@angular/core';
import { DaffPrefixDirective, DaffSuffixDirective } from '../../../core/prefix-suffix/public_api';

@Component({
  selector:
    'daff-list-item' + ',' +
    'a[daff-list-item]',
  templateUrl: './list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffListItemComponent {

  @HostBinding('class.daff-list-item') class = true;

  @ContentChild(DaffPrefixDirective, { static: false }) _prefix: DaffPrefixDirective;
  @ContentChild(DaffSuffixDirective, { static: false }) _suffix: DaffSuffixDirective;
}
