import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
} from '@angular/core';

import {
  DaffPrefixDirective,
  DaffSuffixDirective,
  DaffPrefixable,
  DaffSuffixable,
  DaffPrefixSuffixModule,
} from '@daffodil/design';

@Component({
  standalone: true,
  selector: 'daff-tab-label',
  templateUrl: './tab-label.component.html',
  styleUrl: './tab-label.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    DaffPrefixSuffixModule,
  ],
})
export class DaffTabLabelComponent implements DaffPrefixable, DaffSuffixable {
  @ContentChild(DaffPrefixDirective) _prefix: DaffPrefixDirective;
  @ContentChild(DaffSuffixDirective) _suffix: DaffSuffixDirective;
}
