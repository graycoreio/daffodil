import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { DaffPrefixDirective, DaffSuffixDirective } from '../../../core/prefix-suffix/public_api';

@Component({
  selector: 'daff-list-item',
  templateUrl: './list-item.component.html',
  host: {
    'class': 'daff-list-item'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DaffListItemComponent {

  @ContentChild(DaffPrefixDirective, { static: false }) _prefix: DaffPrefixDirective;
  @ContentChild(DaffSuffixDirective, { static: false }) _suffix: DaffSuffixDirective;
}
